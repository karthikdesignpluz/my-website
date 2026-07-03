# Dynamic Logo & Responsive Menu Setup Guide

## What's Been Added

Your project now has a fully dynamic header and footer system managed from Sanity CMS:

### ✅ New Schema Types
- **Settings** - Store your site logo, name, and footer text
- **Navigation** - Manage menu items with full control over order and external links

### ✅ New Components
- **Header.tsx** - Fetches settings and navigation, displays responsive header
- **MobileMenu.tsx** - Client-side mobile menu toggle with hamburger icon
- **Footer.tsx** - Dynamic footer with site information from settings

### ✅ Updated Layout
- [layout.tsx](src/app/layout.tsx) - Now uses Header and Footer components

---

## How to Use

### Step 1: Create Settings Document in Sanity

1. Go to your Sanity Studio (http://localhost:3000/studio)
2. Click **Create** button
3. Select **Site Settings**
4. Fill in the form:
   - **Site Name**: Your company/site name (e.g., "Southern Hide Exports")
   - **Site Logo**: Upload your logo image
   - **Logo Alt Text**: Descriptive text for the logo
   - **Logo URL**: Where clicking the logo takes you (default: `/`)
   - **Site Description**: Brief description
   - **Footer Text**: Text to display in footer (e.g., "© 2026 My Company. All rights reserved.")
5. **Publish**:
   - Click the **three-dot menu (⋯)** in the top-right corner
   - Select **Publish**

### Step 2: Create Main Navigation Menu

1. In Sanity Studio, click **Create**
2. Select **Navigation Menu**
3. Fill in:
   - **Menu Title**: `Main Navigation` (must match this exactly)
   - **Menu Items**: Add each menu item:
     - **Label**: What users see (e.g., "Home", "About")
     - **URL**: The path (e.g., `/`, `/about`, `/services`)
     - **Order**: Display order (1, 2, 3, etc.)
     - **External Link**: Check if it should open in a new tab
4. **Publish**:
   - Click the **three-dot menu (⋯)** in the top-right corner
   - Select **Publish**

---

## Customization Options

### Logo Image Size
- The logo is set to `w-12 h-12` (48px × 48px)
- Edit [Header.tsx](src/components/Header.tsx) line 43 to change:
```tsx
<div className="relative w-12 h-12">  // Change these Tailwind classes
```

### Menu Styling
- Desktop menu: `text-sm text-slate-700` - Edit to change text size/color
- Mobile menu opens below header with shadow
- Hamburger icon has smooth animation

### Site Name Display
- By default, site name only shows on screens wider than `sm` breakpoint
- Edit [Header.tsx](src/components/Header.tsx) line 50 to change visibility

---

## Behind the Scenes

### How It Works

1. **Header Component** (`Header.tsx`):
   - Runs on the server
   - Fetches settings and navigation data from Sanity
   - Renders logo, site name, and desktop menu
   - Includes `MobileMenu` component for responsive design

2. **Mobile Menu** (`MobileMenu.tsx`):
   - Client-side component for interactivity
   - Shows hamburger menu on mobile devices (`md:hidden`)
   - Smooth animation for menu toggle
   - Auto-closes menu when a link is clicked

3. **Footer Component** (`Footer.tsx`):
   - Fetches settings from Sanity
   - Displays dynamic footer text

### Data Flow
```
Sanity CMS (settings & navigation)
        ↓
GROQ Queries in Components
        ↓
Header/Footer Components
        ↓
Rendered HTML
```

---

## Responsive Breakpoints

The header automatically adjusts for different screen sizes:

- **Mobile** (< 768px):
  - Shows hamburger menu icon
  - Logo only (site name hidden)
  - Mobile menu slides down when toggled

- **Desktop** (≥ 768px):
  - Shows full navigation menu horizontally
  - Logo + site name displayed
  - Hamburger menu hidden

---

## Making Changes

### To Update Logo
1. Go to Sanity Studio → Site Settings
2. Edit the **Site Logo** field
3. Changes appear immediately (with cache revalidation)

### To Add/Edit Menu Items
1. Go to Sanity Studio → Navigation Menu (Main Navigation)
2. Add, remove, or reorder items
3. Changes appear after you refresh the page

### To Change Site Name
1. Edit **Site Settings** → **Site Name**
2. Updates everywhere it's used

### To Change Footer Text
1. Edit **Site Settings** → **Footer Text**
2. Updates automatically

---

## Code Structure

```
src/
├── components/
│   ├── Header.tsx          (Main header component)
│   ├── MobileMenu.tsx      (Mobile menu logic)
│   └── Footer.tsx          (Dynamic footer)
├── sanity/
│   └── schemaTypes/
│       ├── settings.ts     (Site settings schema)
│       ├── navigation.ts   (Menu schema)
│       ├── page.ts         (Existing)
│       └── post.ts         (Existing)
└── app/
    └── layout.tsx          (Updated to use new components)
```

---

## Advanced: Adding More Menus

You can create multiple menus (e.g., footer menu, mobile menu):

1. Create another Navigation document in Sanity
2. Set title to something different (e.g., "Footer Navigation")
3. Update the GROQ query in the component:
   ```typescript
   // Currently gets "Main Navigation"
   `*[_type == "navigation" && title == "Main Navigation"][0]`
   
   // To get a different menu:
   `*[_type == "navigation" && title == "Footer Navigation"][0]`
   ```

---

## Troubleshooting

### Logo not showing?
- Check that you uploaded an image to **Site Settings**
- Verify the image URL is accessible
- Check browser console for image loading errors

### Menu not appearing?
- Verify Navigation menu **title is exactly "Main Navigation"**
- Make sure the Navigation document is **Published**
- Check that menu items have both label and URL

### Changes not showing?
- In development: Changes should appear on next page load
- Build/production: May need to rebuild with `npm run build`

---

## Next Steps

1. ✅ Upload your logo to Sanity Settings
2. ✅ Create your Main Navigation menu
3. ✅ Test on mobile and desktop
4. ✅ Customize colors/styles as needed

Your site is now fully dynamic and managed from Sanity! 🚀
