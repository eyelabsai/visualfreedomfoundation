#!/bin/bash

echo "🖼️  Downloading Visual Freedom Foundation images..."
echo "Creating directory structure..."

# Create directories
mkdir -p public/images/{board-members,testimonials,banners,content,partners,services}

echo "📸 Downloading banner images..."
curl -k -o public/images/banners/hero-banner.jpg "https://www.visual-freedom.org/wp-content/uploads/2025/02/VFF-Banner-blank-scaled.jpg"

echo "👥 Downloading board member photos..."
curl -k -o public/images/board-members/greg-parkhurst.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/parkhurst-1.jpg"
curl -k -o public/images/board-members/jessica-cox.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/jessicacox-e1730133433154.jpg"
curl -k -o public/images/board-members/dan-durrie.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/Durrie-iOR.jpg"
curl -k -o public/images/board-members/osama-ibrahim.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/osama-min-e1728520134638.jpg"
curl -k -o public/images/board-members/roger-zaldivar.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/FOTO-NUEVA-ROGER-904x1024-1-e1728520221317.jpeg"
curl -k -o public/images/board-members/taj-nasser.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/dr_taj_nasser-e1730133778124.jpg"

echo "💬 Downloading testimonial images..."
curl -k -o public/images/testimonials/jessica-cox-headshot.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/Jessica-Cox-Headshot-2-scaled.jpg"
curl -k -o public/images/testimonials/placeholder-patient.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/testiminials-pic-light.jpg"

echo "🖼️  Downloading content images..."
curl -k -o public/images/content/vision-correction-illustration.png "https://www.visual-freedom.org/wp-content/uploads/2024/10/0322_CF11_Fig.png"

echo "🏥 Downloading service images..."
curl -k -o public/images/services/service-placeholder.jpg "https://www.visual-freedom.org/wp-content/uploads/2024/10/service-img.jpg"

echo "🤝 Downloading partner logos..."
curl -k -o public/images/partners/wcr-logo.webp "https://www.visual-freedom.org/wp-content/uploads/2024/10/wcr-logo1.webp"
curl -k -o public/images/partners/himalayan-cataract-project.png "https://www.visual-freedom.org/wp-content/uploads/2024/10/himalayan.png"
curl -k -o public/images/partners/find-organization-icon.png "https://www.visual-freedom.org/wp-content/uploads/2024/10/org@3x.png"
curl -k -o public/images/partners/find-surgeon-icon.png "https://www.visual-freedom.org/wp-content/uploads/2024/10/surgeon_1@3x.png"

echo "✅ All images downloaded successfully!"
echo "📁 Images are now available in public/images/"
echo ""
echo "🔧 Next steps:"
echo "1. Run the script to update component image paths"
echo "2. Update next.config.js to remove WordPress domain"
echo "3. Test your website locally" 