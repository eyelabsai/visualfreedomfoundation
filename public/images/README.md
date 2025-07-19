# Image Migration Guide

This folder contains all images for the Visual Freedom Foundation website, replacing WordPress-hosted images.

## Required Images to Download

### Banners & Hero Images
- **File**: `banners/hero-banner.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2025/02/VFF-Banner-blank-scaled.jpg
- **Usage**: Hero section background

### Board Members
- **File**: `board-members/greg-parkhurst.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/parkhurst-1.jpg
- **Person**: Greg Parkhurst, MD - Board Chairman

- **File**: `board-members/jessica-cox.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/jessicacox-e1730133433154.jpg
- **Person**: Jessica Cox - Board Member

- **File**: `board-members/dan-durrie.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/Durrie-iOR.jpg
- **Person**: Dan Durrie, MD - Board Member

- **File**: `board-members/osama-ibrahim.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/osama-min-e1728520134638.jpg
- **Person**: Osama Ibrahim, MD - Board Member

- **File**: `board-members/roger-zaldivar.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/FOTO-NUEVA-ROGER-904x1024-1-e1728520221317.jpeg
- **Person**: Roger Zaldivar, MD - Board Member

- **File**: `board-members/taj-nasser.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/dr_taj_nasser-e1730133778124.jpg
- **Person**: Taj Nasser, MD - Board Member

### Testimonials
- **File**: `testimonials/jessica-cox-headshot.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/Jessica-Cox-Headshot-2-scaled.jpg
- **Usage**: Jessica Cox testimonial

- **File**: `testimonials/placeholder-patient.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/testiminials-pic-light.jpg
- **Usage**: Generic patient testimonial (used multiple times)

### Content Images
- **File**: `content/vision-correction-illustration.png`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/0322_CF11_Fig.png
- **Usage**: Mission/Vision section illustration

### Services
- **File**: `services/service-placeholder.jpg`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg
- **Usage**: Generic service image (used for all 5 services)

### Partners & Logos
- **File**: `partners/wcr-logo.webp`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/wcr-logo1.webp
- **Usage**: World College of Refractive Surgery logo

- **File**: `partners/himalayan-cataract-project.png`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/himalayan.png
- **Usage**: Himalayan Cataract Project logo

- **File**: `partners/find-organization-icon.png`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/org@3x.png
- **Usage**: Find an Organization icon

- **File**: `partners/find-surgeon-icon.png`
- **Source**: https://visual-freedom.org/wp-content/uploads/2024/10/surgeon_1@3x.png
- **Usage**: Find a Surgeon icon

## Quick Download Script

You can use this curl command to download all images:

```bash
# Create directories
mkdir -p public/images/{board-members,testimonials,banners,content,partners,services}

# Download banners
curl -o public/images/banners/hero-banner.jpg "https://visual-freedom.org/wp-content/uploads/2025/02/VFF-Banner-blank-scaled.jpg"

# Download board members
curl -o public/images/board-members/greg-parkhurst.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/parkhurst-1.jpg"
curl -o public/images/board-members/jessica-cox.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/jessicacox-e1730133433154.jpg"
curl -o public/images/board-members/dan-durrie.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/Durrie-iOR.jpg"
curl -o public/images/board-members/osama-ibrahim.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/osama-min-e1728520134638.jpg"
curl -o public/images/board-members/roger-zaldivar.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/FOTO-NUEVA-ROGER-904x1024-1-e1728520221317.jpeg"
curl -o public/images/board-members/taj-nasser.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/dr_taj_nasser-e1730133778124.jpg"

# Download testimonials
curl -o public/images/testimonials/jessica-cox-headshot.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/Jessica-Cox-Headshot-2-scaled.jpg"
curl -o public/images/testimonials/placeholder-patient.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/testiminials-pic-light.jpg"

# Download content images
curl -o public/images/content/vision-correction-illustration.png "https://visual-freedom.org/wp-content/uploads/2024/10/0322_CF11_Fig.png"

# Download service images
curl -o public/images/services/service-placeholder.jpg "https://visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"

# Download partner logos
curl -o public/images/partners/wcr-logo.webp "https://visual-freedom.org/wp-content/uploads/2024/10/wcr-logo1.webp"
curl -o public/images/partners/himalayan-cataract-project.png "https://visual-freedom.org/wp-content/uploads/2024/10/himalayan.png"
curl -o public/images/partners/find-organization-icon.png "https://visual-freedom.org/wp-content/uploads/2024/10/org@3x.png"
curl -o public/images/partners/find-surgeon-icon.png "https://visual-freedom.org/wp-content/uploads/2024/10/surgeon_1@3x.png"
```

## After Download

After downloading all images, update the following files:
1. `components/BoardOfDirectors.tsx`
2. `components/Testimonials.tsx`
3. `components/Hero.tsx`
4. `components/MissionVision.tsx`
5. `app/services/page.tsx`
6. Remove WordPress content from `content/pages/partners-and-community.json` 