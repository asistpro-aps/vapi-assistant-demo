# Node.js PATH Fixer Script
# Bu script Node.js'i sistem PATH'ine kalıcı olarak ekler

Write-Host "Node.js PATH Fixer Script" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

# Mevcut PATH'i kontrol et
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "Machine")
$nodePath = "C:\Program Files\nodejs"

if ($currentPath -like "*$nodePath*") {
    Write-Host "Node.js zaten PATH'te mevcut!" -ForegroundColor Yellow
} else {
    try {
        # PATH'e Node.js'i ekle
        $newPath = "$currentPath;$nodePath"
        [Environment]::SetEnvironmentVariable("PATH", $newPath, "Machine")
        Write-Host "Node.js başarıyla PATH'e eklendi!" -ForegroundColor Green
        Write-Host "Lütfen yeni bir PowerShell penceresi açın." -ForegroundColor Cyan
    } catch {
        Write-Host "HATA: PATH güncellenirken sorun oluştu." -ForegroundColor Red
        Write-Host "Bu scripti Administrator olarak çalıştırın." -ForegroundColor Yellow
    }
}

# Geçici PATH güncelleme (bu oturum için)
$env:PATH += ";$nodePath"
Write-Host "Geçici PATH güncellendi." -ForegroundColor Cyan

# Test et
try {
    $nodeVersion = & "C:\Program Files\nodejs\node.exe" --version
    $npmVersion = & "C:\Program Files\nodejs\npm.cmd" --version
    Write-Host "Node.js Version: $nodeVersion" -ForegroundColor Green
    Write-Host "NPM Version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js test edilemedi." -ForegroundColor Red
}