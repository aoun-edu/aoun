# Deploy To Cloudflare Pages

هذا المشروع جاهز كموقع `HTML` ثابت ويمكن رفعه مجانًا على `Cloudflare Pages`.

## الاسم المقترح

- `aoun`
- إذا كان محجوزًا: `aoun-site`
- إذا كان محجوزًا أيضًا: `aoun-web`

الرابط المجاني سيكون غالبًا بهذا الشكل:

- `https://aoun.pages.dev`
- أو `https://aoun-site.pages.dev`

## الرفع من المتصفح

1. ادخل إلى `Cloudflare Pages`
2. اختر `Create application`
3. اختر `Pages`
4. اختر `Upload assets`
5. ارفع محتويات هذا المجلد بالكامل
6. اكتب اسم المشروع:
   `aoun` أو `aoun-site`
7. اجعل الملف الرئيسي هو `index.html`

## الرفع عبر GitHub

1. ارفع المشروع إلى GitHub
2. افتح `Cloudflare Pages`
3. اختر `Connect to Git`
4. اختر المستودع
5. اجعل إعدادات البناء كالتالي:
   `Build command`: اتركه فارغًا
   `Build output directory`: `.`
6. أنشئ المشروع

## ملاحظات

- الصفحة الرئيسية هي `index.html`
- صفحة الخدمات موجودة في `our-services/index.html`
- الموقع يعتمد على ملفات تصميم من `aoun.odoo.com`، لذلك يلزم اتصال إنترنت حتى يظهر بنفس الشكل الحالي
- إذا كان اسم `aoun` غير متاح في Cloudflare Pages استخدم `aoun-site`
