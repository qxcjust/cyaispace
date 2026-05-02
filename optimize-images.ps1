# 图片优化脚本 - 压缩JPG和PNG图片
Add-Type -AssemblyName System.Drawing

function Compress-JPG {
    param(
        [string]$InputPath,
        [int]$Quality = 70
    )
    
    try {
        $img = [System.Drawing.Image]::FromFile($InputPath)
        
        # 获取JPEG编码器
        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        
        # 设置压缩质量
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, 
            [long]$Quality
        )
        
        # 保存到临时文件
        $tempPath = $InputPath + ".temp.jpg"
        $img.Save($tempPath, $encoder, $encoderParams)
        $img.Dispose()
        
        # 替换原文件
        Remove-Item $InputPath
        Rename-Item $tempPath (Split-Path $InputPath -Leaf)
        
        $originalSize = (Get-Item ($InputPath -replace "\.temp\.jpg$", "")).Length
        Write-Host "✓ 已优化: $(Split-Path $InputPath -Leaf)" -ForegroundColor Green
        
    } catch {
        Write-Host "✗ 失败: $(Split-Path $InputPath -Leaf) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Optimize-PNG {
    param(
        [string]$InputPath
    )
    
    try {
        $img = [System.Drawing.Image]::FromFile($InputPath)
        
        # 创建新的位图（会自动优化）
        $bmp = New-Object System.Drawing.Bitmap($img)
        
        # 保存到临时文件
        $tempPath = $InputPath + ".temp.png"
        $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        $img.Dispose()
        
        # 替换原文件
        Remove-Item $InputPath
        Rename-Item $tempPath (Split-Path $InputPath -Leaf)
        
        Write-Host "✓ 已优化: $(Split-Path $InputPath -Leaf)" -ForegroundColor Green
        
    } catch {
        Write-Host "✗ 失败: $(Split-Path $InputPath -Leaf) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "开始优化图片..." -ForegroundColor Cyan
Write-Host ""

# 优化主要的大图片
$largeImages = @(
    "images\logo.png",
    "images\wechat\wechat.jpg",
    "images\robot-bg-cropped.jpg",
    "images\partners\Continental.png",
    "images\partners\Seyond.png",
    "images\partners\valeo.png",
    "images\partners\Sonauox.png",
    "images\partners\baidu.png"
)

foreach ($image in $largeImages) {
    $fullPath = Join-Path $PSScriptRoot $image
    if (Test-Path $fullPath) {
        $ext = [IO.Path]::GetExtension($fullPath).ToLower()
        if ($ext -eq ".jpg" -or $ext -eq ".jpeg") {
            Compress-JPG -InputPath $fullPath -Quality 70
        } elseif ($ext -eq ".png") {
            Optimize-PNG -InputPath $fullPath
        }
    } else {
        Write-Host "⚠ 未找到: $image" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "优化完成！" -ForegroundColor Cyan
