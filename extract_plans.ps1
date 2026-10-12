Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\bhava\.gemini\antigravity-ide\brain\20adbf47-7da6-4acf-a023-160321c820c9\.user_uploaded\media_1791801240207.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Image size: $($src.Width) x $($src.Height)"

# The screenshot media_1791801240207.png is the exact floor plan section image
# Let's inspect the layout and crop the 3 floor plans
# Coordinates approximate relative to width:
# Preview 1 (Type A): roughly 34% to 54% X
# Preview 2 (Type B): roughly 55% to 75% X
# Preview 3 (Type C): roughly 76% to 95% X

$outDir = "c:\Users\bhava\Downloads\sthira-axis\sthira-axis\public\images"

# Let's write a function to crop a rectangle
function Crop-Image($bitmap, $rect, $outputPath) {
    $crop = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($crop)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
    $g.DrawImage($bitmap, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $crop.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    Write-Output "Saved $outputPath"
}

# Find bounding boxes based on the actual image size
$w = $src.Width
$h = $src.Height

# If the image is the horizontal banner of Section 06:
# Let's check proportions
Write-Output "Proportions w/h = $($w / $h)"

# Frame 1: Type A
# In the screenshot, the right column spans from ~33% to ~95%
$f1_x = [int]($w * 0.35)
$f1_w = [int]($w * 0.185)
$f1_y = [int]($h * 0.12)
$f1_h = [int]($h * 0.65)

$f2_x = [int]($w * 0.555)
$f2_w = [int]($w * 0.185)
$f2_y = [int]($h * 0.12)
$f2_h = [int]($h * 0.65)

$f3_x = [int]($w * 0.76)
$f3_w = [int]($w * 0.185)
$f3_y = [int]($h * 0.12)
$f3_h = [int]($h * 0.65)

Crop-Image $src (New-Object System.Drawing.Rectangle($f1_x, $f1_y, $f1_w, $f1_h)) (Join-Path $outDir "floorplan_type_a.png")
Crop-Image $src (New-Object System.Drawing.Rectangle($f2_x, $f2_y, $f2_w, $f2_h)) (Join-Path $outDir "floorplan_type_b.png")
Crop-Image $src (New-Object System.Drawing.Rectangle($f3_x, $f3_y, $f3_w, $f3_h)) (Join-Path $outDir "floorplan_type_c.png")

$src.Dispose()
