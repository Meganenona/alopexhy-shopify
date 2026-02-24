# ALOPEXHY Shopify Automation

Welcome to the ALOPEXHY automated Shopify store management system powered by GitHub Actions!

## 🚀 What This Does

This repository contains automated workflows that manage your ALOPEXHY Shopify store:

- ✅ **Theme Deployment** - Auto-deploy theme changes
- 📦 **Product Sync** - Sync products & inventory every 6 hours
- 📝 **Content Publishing** - Publish blog posts and collections
- ✔️ **Quality Tests** - Validate product data daily
- 💾 **Automated Backups** - Daily backups to cloud storage
- 🔧 **Scheduled Maintenance** - Weekly/monthly maintenance tasks

## 🔐 Required Secrets

Add these to GitHub Settings > Secrets and Variables > Actions:

```
SHOPIFY_STORE_URL              = https://alopexhy.myshopify.com
SHOPIFY_ADMIN_ACCESS_TOKEN     = shpat_your_token_here
```

## 📋 Workflows

1. **shopify-theme-deploy.yml** - Triggered on theme/ folder changes
2. **product-sync.yml** - Runs every 6 hours or on data changes
3. **content-publish.yml** - Triggered on content/ folder changes
4. **quality-tests.yml** - Runs daily and on every push
5. **backup-recovery.yml** - Runs daily at 1 AM
6. **scheduled-tasks.yml** - Runs weekly and monthly

## ✅ How to Verify Installation

1. Go to Actions tab in your GitHub repository
2. You should see 6 workflows listed
3. Each workflow shows when it last ran (green = success, red = failed)
4. Click on any workflow to see detailed logs

## 📞 Support

For questions or issues, contact: mc-ambre@hotmail.fr

---

**Last Updated:** 2026-02-24
**Store:** https://alopexhy.com