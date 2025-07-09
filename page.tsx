"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  Plus
} from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    icon: DollarSign,
    color: 'text-green-600',
  },
  {
    name: 'Active Users',
    value: '2,345',
    change: '+180%',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    name: 'Projects',
    value: '12',
    change: '+19%',
    icon: Activity,
    color: 'text-purple-600',
  },
  {
    name: 'Growth Rate',
    value: '24.5%',
    change: '+4.75%',
    icon: TrendingUp,
    color: 'text-orange-600',
  },
];

const recentActivity = [
  { title: 'New project created', time: '2 hours ago', type: 'project' },
  { title: 'Marketing campaign launched', time: '4 hours ago', type: 'marketing' },
  { title: 'Team meeting scheduled', time: '6 hours ago', type: 'planning' },
  { title: 'Resource updated', time: '1 day ago', type: 'resource' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.name}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs text-gray-600">
                  <Badge variant="secondary" className="text-green-600 bg-green-50">
                    {stat.change}
                  </Badge>
                  <span>from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Activity
              <Button variant="ghost" size="sm">
                View all
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardTitle>
            <CardDescription>
              Your latest activity across all projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Create Project
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Invite Team
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Activity className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              Marketing Tools
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}