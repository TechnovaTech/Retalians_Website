import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('retalians_website')
    const reviews = await db.collection('reviews').find({}).toArray()
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise
    const db = client.db('retalians_website')
    const body = await request.json()
    const reviewData = {
      ...body,
      createdAt: new Date(),
      rating: parseInt(body.rating)
    }
    const result = await db.collection('reviews').insertOne(reviewData)
    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise
    const db = client.db('retalians_website')
    const body = await request.json()
    const { _id, ...updateData } = body
    const { ObjectId } = require('mongodb')
    await db.collection('reviews').updateOne(
      { _id: new ObjectId(_id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise
    const db = client.db('retalians_website')
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const { ObjectId } = require('mongodb')
    await db.collection('reviews').deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 })
  }
}