# 📸 Manual Image Download Guide

Since [https://www.visual-freedom.org/](https://www.visual-freedom.org/) blocks automated downloads, you need to manually save these images from your WordPress site.

## 🚀 Quick Setup

**All components have been updated to use local paths!** Just download the images below and your site will be completely WordPress-independent.

## 📁 Required Images to Download

### 1. Board Member Photos
Navigate to your WordPress admin and download these images:

**Save to: `public/images/board-members/`**

1. **greg-parkhurst.jpg** - Greg Parkhurst, MD (Board Chairman)
   - Source: WordPress Media Library → `parkhurst-1.jpg`
   - Local path: `/images/board-members/greg-parkhurst.jpg`

2. **jessica-cox.jpg** - Jessica Cox (Board Member)  
   - Source: WordPress Media Library → `jessicacox-e1730133433154.jpg`
   - Local path: `/images/board-members/jessica-cox.jpg`

3. **dan-durrie.jpg** - Dan Durrie, MD (Board Member)
   - Source: WordPress Media Library → `Durrie-iOR.jpg`  
   - Local path: `/images/board-members/dan-durrie.jpg`

4. **osama-ibrahim.jpg** - Osama Ibrahim, MD (Board Member)
   - Source: WordPress Media Library → `osama-min-e1728520134638.jpg`
   - Local path: `/images/board-members/osama-ibrahim.jpg`

5. **roger-zaldivar.jpg** - Roger Zaldivar, MD (Board Member)  
   - Source: WordPress Media Library → `FOTO-NUEVA-ROGER-904x1024-1-e1728520221317.jpeg`
   - Local path: `/images/board-members/roger-zaldivar.jpg`

6. **taj-nasser.jpg** - Taj Nasser, MD (Board Member)
   - Source: WordPress Media Library → `dr_taj_nasser-e1730133778124.jpg`
   - Local path: `/images/board-members/taj-nasser.jpg`

### 2. Hero Banner
**Save to: `public/images/banners/`**

1. **hero-banner.jpg** - Main hero background image
   - Source: WordPress Media Library → `VFF-Banner-blank-scaled.jpg`
   - Local path: `/images/banners/hero-banner.jpg`

### 3. Testimonial Images  
**Save to: `public/images/testimonials/`**

1. **jessica-cox-headshot.jpg** - Jessica Cox testimonial photo
   - Source: WordPress Media Library → `Jessica-Cox-Headshot-2-scaled.jpg`
   - Local path: `/images/testimonials/jessica-cox-headshot.jpg`

2. **placeholder-patient.jpg** - Generic patient testimonial image
   - Source: WordPress Media Library → `testiminials-pic-light.jpg`
   - Local path: `/images/testimonials/placeholder-patient.jpg`

### 4. Content Images
**Save to: `public/images/content/`**

1. **vision-correction-illustration.png** - Vision correction diagram
   - Source: WordPress Media Library → `0322_CF11_Fig.png`
   - Local path: `/images/content/vision-correction-illustration.png`

### 5. Service Images
**Save to: `public/images/services/`**

1. **service-placeholder.jpg** - Generic service image (used for all services)
   - Source: WordPress Media Library → `service-img.jpg`  
   - Local path: `/images/services/service-placeholder.jpg`

### 6. Partner Logos (Optional)
**Save to: `public/images/partners/`**

1. **wcr-logo.webp** - World College of Refractive Surgery
2. **himalayan-cataract-project.png** - Himalayan Cataract Project  
3. **find-organization-icon.png** - Find Organization icon
4. **find-surgeon-icon.png** - Find Surgeon icon

## 🔧 How to Download from WordPress Admin

1. **Login to WordPress Admin**: Go to your WordPress admin panel
2. **Navigate to Media Library**: Admin → Media → Library  
3. **Search for each image** by its filename (without the path)
4. **Click the image** to open details
5. **Right-click "View attachment page"** → Save image as...
6. **Save with the exact filename** specified above in the correct folder

## ✅ After Download Checklist

Once you've downloaded all images:

1. ✅ **All components updated** - No WordPress dependencies remain
2. ✅ **Local image paths** - All images use `/images/...` paths  
3. ✅ **next.config.js updated** - WordPress domain removed
4. ✅ **Organized structure** - Images in logical folders

## 🚀 Test Your Site

```bash
npm run dev
```

Your site should now work completely independently of WordPress!

## 📝 Notes

- **Image formats**: Keep original formats (jpg, png, webp)
- **File sizes**: Original sizes are fine, Next.js will optimize them
- **Missing images**: Will show broken image icons until downloaded
- **Fallbacks**: Consider adding placeholder images for missing files

## 🎯 Priority Download Order

**High Priority** (Site won't work without these):
1. Board member photos (6 images)
2. Hero banner (1 image)  
3. Vision correction illustration (1 image)

**Medium Priority**:
4. Testimonial images (2 images)
5. Service placeholder (1 image)

**Low Priority**:
6. Partner logos (4 images) - only if using partners page 