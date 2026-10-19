# Downloads the project images used by the portfolio into assets\projects
# Run from the portfolio folder:  powershell -ExecutionPolicy Bypass -File .\download-images.ps1
$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot
New-Item -ItemType Directory -Force -Path "assets\projects" | Out-Null
$images = @{
  "assets/projects/chao-cover.jpg" = "https://cdn.shopify.com/s/files/1/0732/9559/3691/files/Japandi_Ease_CA4A3768.jpg?v=1751279590&width=1600"
  "assets/projects/chao-detail.jpg" = "https://cdn.shopify.com/s/files/1/0732/9559/3691/files/Crafted_To_Endure_CA4A0303.jpg?v=1751279589&width=1400"
  "assets/projects/chao-oversized.jpg" = "https://cdn.shopify.com/s/files/1/0732/9559/3691/files/Tailored_Oversizing_CA4A3826.jpg?v=1751279589&width=1400"
  "assets/projects/pin-cover.jpg" = "https://cdn.shopify.com/s/files/1/0022/5106/3361/files/mobile_Banner-05.png?v=1739866217"
  "assets/projects/pin-banner.jpg" = "https://cdn.shopify.com/s/files/1/0022/5106/3361/files/Website_Banner_2-04.png?v=1739862932"
  "assets/projects/pin-creative-crew.jpg" = "https://sayitwithapin.com/cdn/shop/collections/Personalities_07__1.png?v=1725959425&width=1200"
  "assets/projects/pin-chill-pills.jpg" = "https://sayitwithapin.com/cdn/shop/files/Chill-pills.jpg?v=1697804494&width=1200"
  "assets/projects/firstjob-banner.jpg" = "https://first-job-portal.vercel.app/banner.jpeg"
  "assets/projects/firstjob-logo.png" = "https://first-job-portal.vercel.app/logo.png"
  "assets/projects/eureka-post.jpg" = "https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-6/853566748_1760816789385141_5256525402237453021_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1799&ctp=s640x640&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vz7DoEe9b8MQ7kNvwEiXa4R&_nc_oc=AdrA5N3Cme7TzskSubLp_A6Yq1skMNs4tV2_9NWCsgxOz-haXk-WcWen_UszVmIbXTc&_nc_zt=23&_nc_ht=scontent.fdel3-2.fna&_nc_gid=7MZlwU8IKj5ZTX81OG2_Hg&_nc_ss=7b289&oh=00_AQPzWg5IEXZZ-8aSrbk5mbxpXJkvLqAvpZFaHizJZpCt9Q&oe=6ADC387A"
  "assets/projects/eureka-cover.jpg" = "https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-6/584648527_1439220444878112_5988865093693331262_n.jpg?stp=dst-jpg_tt6&cstp=mx820x360&ctp=s820x360&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=m79pqxovjUsQ7kNvwGtisl0&_nc_oc=AdrR3qdTDHNVcjzqZSogjKMBcPSn5_xqiWN8N6LMBV-QbEIf6Y4tHT7f0wSsPbHEGvs&_nc_zt=23&_nc_ht=scontent.fdel3-3.fna&_nc_gid=pgpNL4szUY657ODHoxriuA&_nc_ss=79289&oh=00_AQPxugS4gJ_jbNA5BkASAVMLgzpW_xyAKVSm0qG4kqP_zw&oe=6ADC272C"
  "assets/projects/eureka-logo.png" = "https://scontent.fdel3-4.fna.fbcdn.net/v/t39.30808-1/301692128_485551173578382_4086972373332454851_n.png?stp=dst-png&cstp=mx1796x1172&ctp=s960x960&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=3ab345&_nc_ohc=Ib7xSVLbXqEQ7kNvwEL2uxA&_nc_oc=AdrUNxetXPCGKFjILxi_FvHJVOmDgTCTgnCk4Tb6H-hczhZDPTkgMqnLC4d9dm8Osiw&_nc_zt=24&_nc_ht=scontent.fdel3-4.fna&_nc_gid=8fcVr2n64Jch5NS8NrvXQw&_nc_ss=79289&oh=00_AQPVOzv_YP5p63wW5O2qUgSu829Sf8U0YqL-V664VBExuw&oe=6ADC494F"
}
foreach ($item in $images.GetEnumerator()) {
  try {
    Invoke-WebRequest -Uri $item.Value -OutFile $item.Key -UseBasicParsing -Headers @{ "User-Agent" = "Mozilla/5.0" }
    Write-Host "Saved $($item.Key)"
  } catch { Write-Warning "Could not download $($item.Key): $($_.Exception.Message)" }
}
Write-Host "Done. Reload the site to use the local copies."
