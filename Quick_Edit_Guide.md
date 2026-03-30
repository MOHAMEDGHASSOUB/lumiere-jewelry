# Lumière Jewelry - Quick Edit Guide

This guide is designed for individuals with absolutely **zero coding experience**. 
Follow these simple steps step-by-step to update text, replace images, and modify links on your website.

---

> [!NOTE] Tools Required
> - **Visual Studio Code** (or any basic text editor like Notepad).
> - **Your Website Folder** (Open the folder containing your website files in VS Code).

## File Structure Overview
Your website files are organized like this:
- **Root Files** (`index.html`, `about.html`, `collection.html`, etc.) — This is where the text and links live.
- **`/images`** — The folder where all your pictures are stored.
- **`/css`** — The design and colors (you usually won't touch this).
- **`/js`** — The interactive logic (you usually won't touch this).

---

## 1. Changing Text (Titles, Paragraphs, Buttons)

All text on your website lives inside the `.html` files (`index.html` for Homepage, `about.html` for Our Story, etc.).

**Step 1:** Double click the HTML file you want to edit (e.g., `index.html`) to open it in VS Code.
**Step 2:** Use **CTRL+F** (or **CMD+F** on Mac) to search for the specific text you want to change.
**Step 3:** Overwrite the text. Just be careful not to delete any of the `<` or `>` symbols around it.

**Example:**
*Original Code:*
```html
<h1 class="serif" ...>Special Requests</h1>
<p style="...">Discover our meticulously curated selection...</p>
```
*You change it to:*
```html
<h1 class="serif" ...>Exclusive Sourcing</h1>
<p style="...">Find the perfect diamond piece...</p>
```
**Step 4:** Save the file (`CTRL+S`).

---

## 2. Replacing Images (Hero, Logos, Products)

To easily replace an image without risking breaking the code, the safest way is to **replace the image file directly inside the `/images` folder**.

**Scenario:** You want to change the massive background image on the homepage (`hero.png`).

**Step 1:** Get your new photo and make sure it has a `.png` or `.jpg` extension.
**Step 2:** Name your new photo EXACTLY what the old photo was named. If we're replacing the hero, name your new image: `hero.png`.
**Step 3:** Drag and drop your new `hero.png` into your website's `/images` folder. 
**Step 4:** Your computer will ask, *"Do you want to replace the existing file?"* Click **Yes to All / Replace**. 

> [!TIP] Adding Brand New Products
> If you want to add a *new* product image rather than replace an old one:
> 1. Drag the new photo into `/images/` (e.g., `new-necklace.jpg`).
> 2. Open `collection.html`.
> 3. Find `<img src="images/ring-01.png" ...>` and change exactly the `images/ring-01.png` part to `images/new-necklace.jpg`.

---

## 3. Changing Page Links and Button Links

Links tell buttons where to click and navigate to. In HTML code, links look like this: `<a href="DESTINATION">Button Text</a>`.

**Changing an internal page link:**
1. Open the `.html` file containing the button. 
2. Search for the text on that button.
3. Look for the `href="something.html"` right before it, and change it.

**Changing the Instagram Profile Link:**
Your website contains links to your Instagram. If you ever change your Instagram handle, here's how to update it:

1. Open `index.html` (and the other pages).
2. Press **CTRL+F** and search for `https://instagram.com`.
3. You will see code like this:
```html
<a href="https://instagram.com" target="_blank"> ... </a>
```
4. Change the URL to your specific page:
```html
<a href="https://instagram.com/MyStoreName" target="_blank"> ... </a>
```

> [!IMPORTANT] The WhatsApp Links
> Since your site uses dynamic pre-filled WhatsApp messages, we set up a special place to change your phone number so you don't have to edit 20 buttons!
> 
> Open the `/js/main.js` file. At the very top, you will see:
> ```javascript
> const CONFIG = {
>   phone: "212600000000",
>   ...
> ```
> Simply replace the number inside the quotes with your real WhatsApp number (include country code, without the `+`). Every "Order via WhatsApp" button on the site will instantly update!

---

### You're Done!
After making edits, simply rely on your local testing or Vercel sync. Since Vercel is linked to your GitHub, all you have to do is upload these new files to GitHub, and your website will automatically update live on the internet!
