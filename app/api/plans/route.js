import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const erpApiUrl = process.env.NEXT_PUBLIC_ERP_API_BASE_URL || 'http://localhost:3000'
    const erpApiKey = process.env.NEXT_PUBLIC_ERP_API_KEY

    // Fetch plans from your ERP API
    const response = await fetch(`${erpApiUrl}/api/public/plans`, {
      headers: {
        'Content-Type': 'application/json',
        ...(erpApiKey && { 'x-api-key': erpApiKey })
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`ERP API error: ${response.status}`)
    }

    const result = await response.json()
    
    if (result.success) {
      return NextResponse.json(result.data)
    }
    
    throw new Error('Failed to fetch plans')
  } catch (error) {
    console.error('Error fetching plans from ERP:', error)
    return NextResponse.json([])
  }
}