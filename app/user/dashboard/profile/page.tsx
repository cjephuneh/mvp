"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"
// import DeveloperLayout from "@/components/developer-layout"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    title: "Senior UI/UX Designer",
    bio: "Passionate designer with 5+ years of experience in creating user-centric digital experiences. Specializing in mobile app design and web interfaces.",
    skills: "UI Design, UX Research, Figma, Adobe XD, Sketch",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    website: "https://janedoe.design",
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const updatedProfile = Object.fromEntries(formData.entries())
    setProfile((prevProfile) => ({ ...prevProfile, ...updatedProfile }))
    setIsEditing(false)
  }

  const skills = profile.skills.split(",").map((skill) => skill.trim())

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit Profile"}</Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/avatars/jane-doe.png" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{profile.name}</CardTitle>
                <CardDescription>{profile.title}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue={profile.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" defaultValue={profile.title} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" name="bio" defaultValue={profile.bio} className="resize-none" />
                  <p className="text-sm text-muted-foreground">
                    A brief description that will appear on your public profile.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <Input id="skills" name="skills" defaultValue={profile.skills} />
                  <p className="text-sm text-muted-foreground">Enter your skills separated by commas.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input id="github" name="github" defaultValue={profile.github} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input id="linkedin" name="linkedin" defaultValue={profile.linkedin} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter URL</Label>
                  <Input id="twitter" name="twitter" defaultValue={profile.twitter} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Personal Website URL</Label>
                  <Input id="website" name="website" defaultValue={profile.website} />
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">About Me</h3>
                  <p>{profile.bio}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Connect with Me</h3>
                  <div className="flex space-x-4 mt-2">
                    {profile.github && (
                      <a href={profile.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {profile.linkedin && (
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {profile.twitter && (
                      <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                    {profile.website && (
                      <a href={profile.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

