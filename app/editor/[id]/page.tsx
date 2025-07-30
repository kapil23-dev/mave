"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Save,
  Eye,
  Smartphone,
  Monitor,
  Tablet,
  Plus,
  Type,
  ImageIcon,
  Layout,
  Settings,
  Undo,
  Redo,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

interface Component {
  id: string
  type: "hero" | "text" | "image" | "button" | "gallery" | "contact" | "menu"
  content: any
  styles: any
}

export default function WebsiteEditor({ params }: { params: { id: string } }) {
  const [components, setComponents] = useState<Component[]>([
    {
      id: "hero-1",
      type: "hero",
      content: {
        title: "Welcome to Our Restaurant",
        subtitle: "Authentic Italian cuisine in the heart of the city",
        buttonText: "View Menu",
        backgroundImage: "/placeholder.svg?height=400&width=800&text=Hero+Background",
      },
      styles: {
        backgroundColor: "#1f2937",
        textColor: "#ffffff",
        padding: "80px 20px",
      },
    },
  ])

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [isDragging, setIsDragging] = useState(false)
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const componentTemplates = [
    { type: "hero", icon: <Layout className="h-4 w-4" />, label: "Hero Section" },
    { type: "text", icon: <Type className="h-4 w-4" />, label: "Text Block" },
    { type: "image", icon: <ImageIcon className="h-4 w-4" />, label: "Image" },
    { type: "button", icon: <Plus className="h-4 w-4" />, label: "Button" },
    { type: "gallery", icon: <Layout className="h-4 w-4" />, label: "Gallery" },
    { type: "contact", icon: <Type className="h-4 w-4" />, label: "Contact Form" },
    { type: "menu", icon: <Layout className="h-4 w-4" />, label: "Menu" },
  ]

  const addComponent = (type: Component["type"]) => {
    const newComponent: Component = {
      id: `${type}-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      styles: getDefaultStyles(type),
    }
    setComponents([...components, newComponent])
  }

  const getDefaultContent = (type: Component["type"]) => {
    switch (type) {
      case "hero":
        return {
          title: "New Hero Section",
          subtitle: "Add your subtitle here",
          buttonText: "Call to Action",
          backgroundImage: "/placeholder.svg?height=400&width=800&text=Hero+Background",
        }
      case "text":
        return { text: "Add your text content here..." }
      case "image":
        return { src: "/placeholder.svg?height=300&width=600&text=Image", alt: "Image description" }
      case "button":
        return { text: "Click Me", link: "#" }
      case "gallery":
        return {
          images: [
            "/placeholder.svg?height=200&width=300&text=Gallery+1",
            "/placeholder.svg?height=200&width=300&text=Gallery+2",
            "/placeholder.svg?height=200&width=300&text=Gallery+3",
          ],
        }
      case "contact":
        return { title: "Contact Us", fields: ["name", "email", "message"] }
      case "menu":
        return {
          title: "Our Menu",
          items: [
            { name: "Pasta Carbonara", price: "€12.50", description: "Classic Italian pasta" },
            { name: "Margherita Pizza", price: "€10.00", description: "Fresh tomato and mozzarella" },
          ],
        }
      default:
        return {}
    }
  }

  const getDefaultStyles = (type: Component["type"]) => {
    return {
      backgroundColor: "#ffffff",
      textColor: "#000000",
      padding: "40px 20px",
      textAlign: "left",
    }
  }

  const updateComponent = (id: string, updates: Partial<Component>) => {
    setComponents(components.map((comp) => (comp.id === id ? { ...comp, ...updates } : comp)))
  }

  const deleteComponent = (id: string) => {
    setComponents(components.filter((comp) => comp.id !== id))
    setSelectedComponent(null)
  }

  const moveComponent = (fromIndex: number, toIndex: number) => {
    const newComponents = [...components]
    const [movedComponent] = newComponents.splice(fromIndex, 1)
    newComponents.splice(toIndex, 0, movedComponent)
    setComponents(newComponents)
  }

  const handleDragStart = (e: React.DragEvent, componentId: string) => {
    setDraggedComponent(componentId)
    setIsDragging(true)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    if (!draggedComponent) return

    const fromIndex = components.findIndex((comp) => comp.id === draggedComponent)
    const toIndex = components.findIndex((comp) => comp.id === targetId)

    if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
      moveComponent(fromIndex, toIndex)
    }

    setDraggedComponent(null)
    setIsDragging(false)
  }

  const renderComponent = (component: Component) => {
    const isSelected = selectedComponent === component.id

    switch (component.type) {
      case "hero":
        return (
          <div
            className={`relative min-h-[300px] flex items-center justify-center text-center ${
              isSelected ? "ring-2 ring-blue-500" : ""
            }`}
            style={{
              backgroundColor: component.styles.backgroundColor,
              color: component.styles.textColor,
              padding: component.styles.padding,
              backgroundImage: `url(${component.content.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={(e) => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, component.id)}
          >
            <div className="bg-black/50 p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-4">{component.content.title}</h1>
              <p className="text-xl mb-6">{component.content.subtitle}</p>
              <Button size="lg">{component.content.buttonText}</Button>
            </div>
          </div>
        )

      case "text":
        return (
          <div
            className={`p-6 ${isSelected ? "ring-2 ring-blue-500" : ""}`}
            style={{
              backgroundColor: component.styles.backgroundColor,
              color: component.styles.textColor,
              textAlign: component.styles.textAlign,
            }}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={(e) => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, component.id)}
          >
            <p>{component.content.text}</p>
          </div>
        )

      case "image":
        return (
          <div
            className={`p-6 ${isSelected ? "ring-2 ring-blue-500" : ""}`}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={(e) => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, component.id)}
          >
            <img
              src={component.content.src || "/placeholder.svg"}
              alt={component.content.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )

      case "menu":
        return (
          <div
            className={`p-6 ${isSelected ? "ring-2 ring-blue-500" : ""}`}
            style={{
              backgroundColor: component.styles.backgroundColor,
              color: component.styles.textColor,
            }}
            onClick={() => setSelectedComponent(component.id)}
            draggable
            onDragStart={(e) => handleDragStart(e, component.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, component.id)}
          >
            <h2 className="text-2xl font-bold mb-6">{component.content.title}</h2>
            <div className="space-y-4">
              {component.content.items.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-start border-b pb-2">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div
            className={`p-6 border-2 border-dashed border-gray-300 ${isSelected ? "ring-2 ring-blue-500" : ""}`}
            onClick={() => setSelectedComponent(component.id)}
          >
            <p className="text-gray-500">Component: {component.type}</p>
          </div>
        )
    }
  }

  const selectedComp = components.find((comp) => comp.id === selectedComponent)

  const getViewportClass = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-sm mx-auto"
      case "tablet":
        return "max-w-2xl mx-auto"
      default:
        return "w-full"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <Link href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline">
                <Undo className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Redo className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <h1 className="font-bold text-lg">Website Editor</h1>
          <p className="text-sm text-gray-600">Bella Vista Restaurant</p>
        </div>

        {/* Components Panel */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Add Components</h3>
            <div className="grid grid-cols-2 gap-2">
              {componentTemplates.map((template) => (
                <Button
                  key={template.type}
                  variant="outline"
                  size="sm"
                  className="h-auto p-3 flex flex-col items-center space-y-1 bg-transparent"
                  onClick={() => addComponent(template.type)}
                >
                  {template.icon}
                  <span className="text-xs">{template.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Component Settings */}
          {selectedComp && (
            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Component Settings</h3>
                <Button size="sm" variant="destructive" onClick={() => deleteComponent(selectedComp.id)}>
                  Delete
                </Button>
              </div>

              <div className="space-y-4">
                {selectedComp.type === "hero" && (
                  <>
                    <div>
                      <Label htmlFor="hero-title">Title</Label>
                      <Input
                        id="hero-title"
                        value={selectedComp.content.title}
                        onChange={(e) =>
                          updateComponent(selectedComp.id, {
                            content: { ...selectedComp.content, title: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-subtitle">Subtitle</Label>
                      <Input
                        id="hero-subtitle"
                        value={selectedComp.content.subtitle}
                        onChange={(e) =>
                          updateComponent(selectedComp.id, {
                            content: { ...selectedComp.content, subtitle: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-button">Button Text</Label>
                      <Input
                        id="hero-button"
                        value={selectedComp.content.buttonText}
                        onChange={(e) =>
                          updateComponent(selectedComp.id, {
                            content: { ...selectedComp.content, buttonText: e.target.value },
                          })
                        }
                      />
                    </div>
                  </>
                )}

                {selectedComp.type === "text" && (
                  <div>
                    <Label htmlFor="text-content">Text Content</Label>
                    <textarea
                      id="text-content"
                      className="w-full p-2 border rounded-md"
                      rows={4}
                      value={selectedComp.content.text}
                      onChange={(e) =>
                        updateComponent(selectedComp.id, {
                          content: { ...selectedComp.content, text: e.target.value },
                        })
                      }
                    />
                  </div>
                )}

                {/* Style Settings */}
                <div className="space-y-3">
                  <h4 className="font-medium">Styling</h4>
                  <div>
                    <Label htmlFor="bg-color">Background Color</Label>
                    <Input
                      id="bg-color"
                      type="color"
                      value={selectedComp.styles.backgroundColor}
                      onChange={(e) =>
                        updateComponent(selectedComp.id, {
                          styles: { ...selectedComp.styles, backgroundColor: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="text-color">Text Color</Label>
                    <Input
                      id="text-color"
                      type="color"
                      value={selectedComp.styles.textColor}
                      onChange={(e) =>
                        updateComponent(selectedComp.id, {
                          styles: { ...selectedComp.styles, textColor: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant={viewMode === "desktop" ? "default" : "outline"}
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === "tablet" ? "default" : "outline"}
                onClick={() => setViewMode("tablet")}
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === "mobile" ? "default" : "outline"}
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
            <Badge variant="secondary">{viewMode}</Badge>
          </div>

          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${getViewportClass()}`} ref={dropZoneRef}>
            {components.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <Layout className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-2">Start Building Your Website</h3>
                <p className="mb-4">Add components from the sidebar to get started</p>
                <Button onClick={() => addComponent("hero")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Hero Section
                </Button>
              </div>
            ) : (
              <div className="space-y-0">
                {components.map((component) => (
                  <div key={component.id} className="relative group">
                    {renderComponent(component)}
                    {selectedComponent === component.id && (
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <Button size="sm" variant="secondary">
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
