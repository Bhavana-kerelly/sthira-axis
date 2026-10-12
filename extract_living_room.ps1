Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\bhava\.gemini\antigravity-ide\brain\20adbf47-7da6-4acf-a023-160321c820c9\.user_uploaded\media_1791801352475.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Image size: $($src.Width) x $($src.Height)"

$outDir = "c:\Users\bhava\Downloads\sthira-axis\sthira-axis\public\images"

function Crop-Image($bitmap, $rect, $outputPath) {
    $crop = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($crop)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)
    $g.DrawImage($bitmap, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $crop.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $crop.Dispose()
    Write-Output "Saved $outputPath"
}

$w = $src.Width
$h = $src.Height

# In the screenshot, the living room image is on the left side:
# Roughly from x = ~6% to x = ~44%, and y = ~6% to ~94%
$ix = [int]($w * 0.068)
$iy = [int]($h * 0.068)
$iw = [int]($w * 0.372)
$ih = [int]($h * 0.864)

Crop-Image $src (New-Object System.Drawing.Rectangle($ix, $iy, $iw, $ih)) (Join-Path $outDir "specifications_living_room.jpg")

$src.Dispose()
