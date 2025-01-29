"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const [role, setRole] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const router = useRouter()

  const handleRoleSelection = (role: string) => {
    setRole(role)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (role && formData.name && formData.email && formData.password) {
      // Simulate registration process or make API call here
      console.log("Registering with data:", formData, "Role:", role)
      router.push(`/${role}`) // Redirect based on selected role
    }
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Contest Platform
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform has revolutionized how we find top talent and innovative solutions for our
              projects.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
          </div>



          {/* Role selection */}
          <div className="flex justify-center space-x-4 mb-6">
            <button 
              onClick={() => handleRoleSelection('admin')} 
              className="w-24 p-3 bg-primary text-white rounded-md hover:bg-primary-dark">
              Admin
            </button>
            <button 
              onClick={() => handleRoleSelection('client')} 
              className="w-24 p-3 bg-primary text-white rounded-md hover:bg-primary-dark">
              Client
            </button>
            <button 
              onClick={() => handleRoleSelection('user')} 
              className="w-24 p-3 bg-primary text-white rounded-md hover:bg-primary-dark">
              User
            </button>
          </div>

          {/* Registration Form */}
          {role && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-muted rounded-md"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-muted rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-muted rounded-md"
                  placeholder="Create a password"
                />
              </div>

              {/* Register button */}
              <button 
                type="submit"
                disabled={!formData.name || !formData.email || !formData.password}
                className={`mt-6 w-full p-3 ${!formData.name || !formData.email || !formData.password ? 'bg-gray-400' : 'bg-primary'} text-white rounded-md hover:bg-primary-dark`}>
                Register
              </button>
            </form>
          )}

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
