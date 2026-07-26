# Google Search Console Verification Guide

This project includes built-in support for both **HTML Meta Tag** and **HTML File Verification** to quickly verify your domain on Google Search Console.

---

## Method 1: HTML Tag Verification (Recommended)

1. Open **[Google Search Console](https://search.google.com/search-console)**.
2. Add your website property (e.g. `https://novexaacademy.com`).
3. Choose the **HTML Tag** method.
4. Google will generate a meta tag like:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```
5. Open `index.html` in your project/repository.
6. Locate the Google Search Console section:
   ```html
   <!-- ================================================================= -->
   <!-- GOOGLE SEARCH CONSOLE VERIFICATION CODE                           -->
   <!-- ================================================================= -->
   <meta name="google-site-verification" content="PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE" />
   ```
7. Replace `PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE` with your code (or paste the entire `<meta ... />` tag provided by Google).
8. Commit/deploy your site and click **Verify** in Google Search Console.

---

## Method 2: HTML File Upload Verification

1. In **Google Search Console**, select the **HTML File** verification option.
2. Google will provide a file (e.g. `google1234567890abcdef.html`) or a verification string `google-site-verification: google1234567890abcdef.html`.
3. You can either:
   - **Option A**: Rename `/public/google-site-verification.html` to match Google's filename (e.g., `/public/google1234567890abcdef.html`).
   - **Option B**: Keep `/public/google-site-verification.html` and edit its contents with the line provided by Google.
4. Once deployed, the file will be accessible at `https://yourdomain.com/google-site-verification.html` (or your custom filename).
5. Click **Verify** in Google Search Console.

