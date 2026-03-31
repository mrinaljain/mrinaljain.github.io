# Admin Panel Implementation Guide

This guide shows how to create a simple admin panel for managing popups. It demonstrates creating, reading, updating, and deleting popups through a user-friendly interface.

## Example: Basic Admin Dashboard Component

Create a new file: `src/components/admin/PopupManager.tsx`

```typescript
"use client";

import React, { useState, useEffect } from "react";
import { PopupConfig } from "@/types/popup";

export default function PopupManager() {
  const [popups, setPopups] = useState<PopupConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<PopupConfig>>({});

  // Fetch all popups
  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    try {
      const response = await fetch("/api/popups");
      const data = await response.json();
      setPopups(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch popups:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await fetch("/api/popups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowForm(false);
        setFormData({});
        fetchPopups();
        alert("Popup created successfully!");
      }
    } catch (error) {
      console.error("Failed to create popup:", error);
      alert("Failed to create popup");
    }
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    try {
      const response = await fetch(`/api/popups/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setEditingId(null);
        setFormData({});
        fetchPopups();
        alert("Popup updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update popup:", error);
      alert("Failed to update popup");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this popup?")) return;
    try {
      const response = await fetch(`/api/popups/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchPopups();
        alert("Popup deleted successfully!");
      }
    } catch (error) {
      console.error("Failed to delete popup:", error);
      alert("Failed to delete popup");
    }
  };

  const handleEdit = (popup: PopupConfig) => {
    setFormData(popup);
    setEditingId(popup.id);
    setShowForm(true);
  };

  if (loading) return <div className="p-4">Loading popups...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Popup Manager</h1>

      {/* Create Button */}
      <button
        onClick={() => {
          setFormData({});
          setEditingId(null);
          setShowForm(!showForm);
        }}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        {showForm ? "Cancel" : "Create New Popup"}
      </button>

      {/* Form */}
      {showForm && (
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? "Edit Popup" : "Create New Popup"}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* ID */}
            <div>
              <label className="block font-semibold mb-2">Popup ID</label>
              <input
                type="text"
                value={formData.id || ""}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="w-full border rounded p-2"
                disabled={!!editingId}
              />
            </div>

            {/* Title */}
            <div>
              <label className="block font-semibold mb-2">Title</label>
              <input
                type="text"
                value={formData.content?.title || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: { ...formData.content, title: e.target.value },
                  })
                }
                className="w-full border rounded p-2"
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block font-semibold mb-2">Description</label>
              <textarea
                value={formData.content?.description || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: { ...formData.content, description: e.target.value },
                  })
                }
                className="w-full border rounded p-2"
                rows={3}
              />
            </div>

            {/* Image URL */}
            <div className="col-span-2">
              <label className="block font-semibold mb-2">Image URL</label>
              <input
                type="text"
                value={formData.content?.imageUrl || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: { ...formData.content, imageUrl: e.target.value },
                  })
                }
                className="w-full border rounded p-2"
              />
            </div>

            {/* Button Label */}
            <div>
              <label className="block font-semibold mb-2">Button Label</label>
              <input
                type="text"
                value={formData.content?.buttonAction?.label || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: {
                      ...formData.content,
                      buttonAction: {
                        ...formData.content?.buttonAction,
                        label: e.target.value,
                      },
                    },
                  })
                }
                className="w-full border rounded p-2"
              />
            </div>

            {/* Button URL */}
            <div>
              <label className="block font-semibold mb-2">Button URL</label>
              <input
                type="text"
                value={formData.content?.buttonAction?.url || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: {
                      ...formData.content,
                      buttonAction: {
                        ...formData.content?.buttonAction,
                        url: e.target.value,
                      },
                    },
                  })
                }
                className="w-full border rounded p-2"
              />
            </div>

            {/* Is Active */}
            <div>
              <label className="block font-semibold mb-2">Active</label>
              <input
                type="checkbox"
                checked={formData.isActive ?? true}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.target.checked })
                }
                className="w-4 h-4"
              />
            </div>

            {/* Display Frequency */}
            <div>
              <label className="block font-semibold mb-2">Display Frequency</label>
              <select
                value={formData.displayFrequency || "once"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    displayFrequency: e.target.value as any,
                  })
                }
                className="w-full border rounded p-2"
              >
                <option value="once">Once</option>
                <option value="always">Always</option>
                <option value="session">Session</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="block font-semibold mb-2">Priority</label>
              <input
                type="number"
                value={formData.priority || 0}
                onChange={(e) =>
                  setFormData({ ...formData, priority: parseInt(e.target.value) })
                }
                className="w-full border rounded p-2"
              />
            </div>

            {/* Display Delay */}
            <div>
              <label className="block font-semibold mb-2">Display Delay (seconds)</label>
              <input
                type="number"
                value={formData.displayDelay || 0}
                onChange={(e) =>
                  setFormData({ ...formData, displayDelay: parseInt(e.target.value) })
                }
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={editingId ? handleUpdate : handleCreate}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              {editingId ? "Update" : "Create"}
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setFormData({});
              }}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Popups Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Active</th>
              <th className="border p-3 text-left">Frequency</th>
              <th className="border p-3 text-left">Impressions</th>
              <th className="border p-3 text-left">Clicks</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {popups.map((popup) => (
              <tr key={popup.id} className="hover:bg-gray-50">
                <td className="border p-3">{popup.id}</td>
                <td className="border p-3">{popup.content.title}</td>
                <td className="border p-3">
                  {popup.isActive ? "✓" : "✗"}
                </td>
                <td className="border p-3">{popup.displayFrequency}</td>
                <td className="border p-3">{popup.analytics?.impressions || 0}</td>
                <td className="border p-3">{popup.analytics?.clicks || 0}</td>
                <td className="border p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(popup)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(popup.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {popups.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No popups found. Create one to get started!
        </div>
      )}
    </div>
  );
}
```

## Usage Instructions

1. **Create the component**: Save the code above as `src/components/admin/PopupManager.tsx`

2. **Create an admin page**: Create `src/app/admin/page.tsx`
   ```typescript
   import PopupManager from "@/components/admin/PopupManager";

   export default function AdminPage() {
     return <PopupManager />;
   }
   ```

3. **Access the dashboard**: Navigate to `http://localhost:3000/admin`

4. **Manage popups**: 
   - Click "Create New Popup" to add a new popup
   - Fill in the form fields
   - Click "Create" or "Update"
   - Use the Edit button to modify existing popups
   - Use the Delete button to remove popups

## API Changes for Admin

### Update your route.ts to support filtering

If you want to fetch all popups (not just for a specific page), update `src/app/api/popups/route.ts`:

```typescript
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");

    // If page is specified, return popup for that page
    if (page) {
      const now = new Date();
      const popup = await Popup.findOne({
        isActive: true,
        targetPages: page,
        $and: [
          {
            $or: [
              { startDate: { $exists: false } },
              { startDate: { $lte: now } },
            ],
          },
          {
            $or: [
              { endDate: { $exists: false } },
              { endDate: { $gte: now } },
            ],
          },
        ],
      }).sort({ priority: -1 });

      return NextResponse.json({
        popup: popup ? popup.toObject() : null,
        showPopup: !!popup,
      });
    }

    // Otherwise, return all popups (for admin panel)
    const allPopups = await Popup.find({}).sort({ priority: -1 });
    return NextResponse.json(allPopups.map(p => p.toObject()));
  } catch (error) {
    console.error("Error fetching popups:", error);
    return NextResponse.json(
      { error: "Failed to fetch popups" },
      { status: 500 }
    );
  }
}
```

## Security Considerations

⚠️ **Important**: Add authentication to the admin panel before deploying to production.

Example with authentication:

```typescript
import { headers } from "next/headers";

// In your admin component
const isAdmin = async () => {
  const headersList = await headers();
  const authToken = headersList.get("authorization");
  // Verify token with your auth service
  return verifyToken(authToken);
};

if (!(await isAdmin())) {
  return <div>Unauthorized</div>;
}
```

## Next Steps

1. Add authentication to protect the admin panel
2. Add form validation
3. Add bulk actions (delete multiple, activate/deactivate)
4. Add filters and search
5. Add export/import functionality
6. Add more detailed analytics view
7. Add scheduling for popups
