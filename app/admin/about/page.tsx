"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit, Users, TrendingUp, LogOut } from "lucide-react"
import Link from "next/link"

export default function AdminAbout() {
  const [aboutStats, setAboutStats] = useState({
    customers: '5000+',
    teamMembers: '100+',
    yearsExperience: '7+'
  })
  const [editingStats, setEditingStats] = useState(false)

  useEffect(() => {
    fetchAboutStats()
  }, [])

  const fetchAboutStats = async () => {
    try {
      const response = await fetch('/api/about-stats')
      const data = await response.json()
      setAboutStats(data)
    } catch (error) {
      console.error('Error fetching about stats:', error)
    }
  }

  const saveAboutStats = async () => {
    try {
      console.log('Saving stats:', aboutStats)
      const response = await fetch('/api/about-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aboutStats)
      })
      
      const result = await response.json()
      console.log('Save response:', result)
      
      if (response.ok) {
        setEditingStats(false)
        alert('Stats saved successfully!')
      } else {
        alert(`Failed to save stats: ${result.error}`)
      }
    } catch (error) {
      console.error('Error saving about stats:', error)
      alert(`Error saving stats: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">About Stats Management</h1>
              <p className="text-gray-600">Manage company statistics</p>
            </div>
            <div className="flex gap-4 items-center">
              <Link href="/admin/reviews" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">Reviews</Link>
              <Link href="/admin/blogs" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">Blogs</Link>
              <Link href="/admin/messages" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">Messages</Link>
              <Link href="/admin/services" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">Services</Link>
              <Link href="/admin/about" className="px-4 py-2 bg-[#D7263D] text-white rounded-lg">About</Link>
              <Link href="/admin/social-media" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">Social Media</Link>
              <Button onClick={() => { localStorage.removeItem("adminLoggedIn"); window.location.href = "/admin"; }} className="bg-red-600 hover:bg-red-700 text-white">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">About Stats</h2>
          <Button 
            className="bg-[#D7263D] hover:bg-[#F03A47]"
            onClick={() => editingStats ? saveAboutStats() : setEditingStats(true)}
          >
            <Edit className="w-4 h-4 mr-2" />
            {editingStats ? 'Save' : 'Edit Stats'}
          </Button>
        </div>
        
        {editingStats && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Edit About Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Happy Customers</label>
                  <Input
                    value={aboutStats.customers}
                    onChange={(e) => setAboutStats({...aboutStats, customers: e.target.value})}
                    placeholder="e.g., 5000+"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Team Members</label>
                  <Input
                    value={aboutStats.teamMembers}
                    onChange={(e) => setAboutStats({...aboutStats, teamMembers: e.target.value})}
                    placeholder="e.g., 100+"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Years Experience</label>
                  <Input
                    value={aboutStats.yearsExperience}
                    onChange={(e) => setAboutStats({...aboutStats, yearsExperience: e.target.value})}
                    placeholder="e.g., 7+"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Happy Customers</p>
                  <p className="text-2xl font-bold text-gray-900">{aboutStats.customers}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Team Members</p>
                  <p className="text-2xl font-bold text-gray-900">{aboutStats.teamMembers}</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Years Experience</p>
                  <p className="text-2xl font-bold text-gray-900">{aboutStats.yearsExperience}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}