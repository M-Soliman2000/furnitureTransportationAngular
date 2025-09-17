import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitLoggerService } from '../../services/visit-logger.service';

@Component({
  selector: 'app-furniture-transportation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="furniture-page" dir="rtl">
      <header>
        <div class="container">
          <div class="logo">مؤسسة الضمان الذهبي لنقل الاثاث - 0559160622</div>
          <div class="tagline">نقل عفش مع الفك والتركيب والتغليف والضمان - في جدة وجميع أنحاء المملكة العربية السعودية</div>
        </div>
      </header>

      <div class="container">
        <section class="contact">
          <h2>اتصل بنا الآن</h2>
          <p><i class="fas fa-phone"></i> هاتف: 0559160622</p>
          <br>
          <a href="https://wa.me/966559160622" target="_blank" class="btn-primary">
            اطلب خدمة الآن
          </a>
        </section>

        <!-- قسم SEO الجديد -->
        <section class="seo-section">
          <h2 class="seo-title">شركة نقل عفش متخصصة في جدة والمملكة العربية السعودية</h2>

          <div class="seo-image-container">
            <div class="seo-image">
              <div class="seo-image-content">
                <div class="seo-image-logo">الضمان الذهبي لنقل الإثاث</div>
                <div class="seo-image-text">اضمن عفشك بأفضل خدمة نقل في جدة والمملكة</div>
              </div>
            </div>
          </div>

          <div class="seo-content">
            <h3>أفضل شركة نقل عفش في جدة والرياض وجميع مدن المملكة</h3>
            <p>
              تأسست مؤسسة الضمان الذهبي لنقل الأثاث لتكون من أفضل شركات نقل العفش في المملكة العربية السعودية، وخاصة في مدن مثل جدة والرياض ومكة المكرمة والمدينة المنورة والدمام والخبر. نحن نقدم خدمات نقل الأثاث بكفاءة عالية وبأسعار مناسبة، مع ضمان الحفاظ على جميع قطع الأثاث من خلال التغليف المحترف والفك والتركيب الآمن.
            </p>

            <h3>خدمات نقل العفش المتكاملة</h3>
            <p>
              خدماتنا تشمل نقل العفش المنزلي، نقل عفش المكاتب، نقل الأجهزة الكهربائية، فك وتركيب الغرف، فك وتركيب المطابخ، وكذلك فك وتركيب المكيفات والستائر والنجف. نحن نستخدم أحدث التقنيات ومواد التغليف عالية الجودة لضمان وصول عفشك بحالة ممتازة. فريقنا من الفنيين المحترفين مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث والأجهزة بمنتهى العناية.
            </p>

            <h3>نقل عفش مع الضمان والجودة</h3>
            <p>
              سواء كنت تبحث عن شركة نقل عفش في جدة أو في أي مدينة سعودية أخرى، فإن مؤسسة الضمان الذهبي توفر لك خدمة متكاملة تشمل التغليف، النقل، الفك، والتركيب. نقدم أيضًا خدمات تخزين العفش لفترات طويلة أو قصيرة في مستودعات مجهزة ومؤمنة. أسعارنا تنافسية ونقدم عروض خاصة لعملائنا الكرام.
            </p>

            <h3>لماذا تختار مؤسسة الضمان الذهبي؟</h3>
            <p>
              مع مؤسسة الضمان الذهبي، تكون قد اخترت أفضل شركة نقل عفش في السعودية. نحن نضمن لك خدمة سريعة وآمنة وموثوقة. اتصل بنا الآن على الرقم 0559160622 للحصول على أفضل خدمة نقل أثاث في جدة والرياض وجميع مدن المملكة. لا تتردد في الاتصال بنا للحصول على استشارة مجانية ومعاينة مجانية لتقديم السعر المناسب.
            </p>

            <div class="seo-keywords">
              <h3>كلمات مفتاحية لخدماتنا:</h3>
              <div class="keywords-list">
                <span class="keyword" *ngFor="let keyword of keywords">{{ keyword }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- باقي الأقسام -->
        <section class="services">
          <h2 class="service-title">خدماتنا المتكاملة لنقل العفش</h2>
          <p>نقدم في شركتنا خدمات نقل العفش المتكاملة التي تشمل الفك والتركيب والتغليف بأسعار مناسبة مع ضمان على الخدمة. نحن نستخدم سيارات مقفولة مجهزة خصيصاً لنقل العفش لحماية أغراضكم أثناء التنقل بين مدن المملكة العربية السعودية.</p>

          <div class="service-list">
            <div class="service-item" *ngFor="let service of services">
              <div class="service-img">
                <img [src]="service.image" [alt]="service.title">
              </div>
              <div class="service-content">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="why-us">
          <h2>لماذا تختار شركتنا لنقل العفش؟</h2>
          <div class="features">
            <div class="feature" *ngFor="let feature of features">
              <i [class]="feature.icon"></i>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </section>

        <section class="gallery">
          <h2 class="gallery-title">معرض أعمالنا</h2>
          <div class="gallery-grid">
            <div class="gallery-item" *ngFor="let image of galleryImages">
              <img [src]="image.src" [alt]="image.alt">
            </div>
          </div>
        </section>

        <div class="pricing-coverage">
          <section class="pricing">
            <h2>أسعارنا</h2>
            <p>نسعّر خدماتنا بعد معاينة العفش من قبل المندوب المختص. نقدم عروض أسعار تنافسية ومناسبة لجميع العملاء مع مراعاة حجم العفش ومسافة النقل ومدى تعقيد عملية الفك والتركيب.</p>
            <p>لا تتردد في الاتصال بنا لطلب معاينة مجانية والحصول على سعر دقيق لخدمات نقل العفش.</p>
            <img src="assets/images/mony.png" alt="أسعار مناسبة" style="width: 100%; border-radius: 8px; margin-top: 20px;">
          </section>

          <section class="coverage">
            <h2>مناطق الخدمة</h2>
            <p>نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية، بما في ذلك:</p>
            <ul>
              <li *ngFor="let city of serviceCities">{{ city }}</li>
            </ul>
            <div style="width: 100%; height: 400px;">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184408.2667056283!2d39.11421015!3d21.4499999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d72e3a3d2e1b%3A0x9f1e3e4146b8c6d1!2sJeddah!5e0!3m2!1sen!2ssa!4v1692345678901!5m2!1sen!2ssa"
                      width="100%"
                      height="100%"
                      style="border:0; border-radius: 10px;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </section>

          <section class="services py-5" style="background-color: #f9f9f9;">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <h2 class="mb-4">خدماتنا | شركة الضمان الذهبي لنقل العفش والأثاث في جدة</h2>
                  <p class="mb-4">
                    في شركة الضمان الذهبي لنقل العفش في جدة، نُقدّم باقة متكاملة من الخدمات المصمّمة لتلبي جميع احتياجات النقل الخاصة بك،
                    سواء كنت تبحث عن <strong>نقل عفش في جدة</strong>، أو ترغب في خدمة احترافية في <strong>نقل أثاث في جدة</strong>،
                    أو تخطط لعملية <strong>نقل مكاتب داخل جدة</strong>، فنحن هنا لتقديم الأفضل لك.
                  </p>

                  <h4 class="mb-3">⭐ خدماتنا الأساسية:</h4>
                  <ul style="font-size: 17px; line-height: 1.8;">
                    <li>✅ نقل عفش في جدة</li>
                    <li>✅ نقل أثاث في جدة</li>
                    <li>✅ نقل مكاتب في جدة</li>
                  </ul>

                  <h4 class="mt-4 mb-3">💪 لماذا تختار شركة الضمان الذهبي؟</h4>
                  <ul style="font-size: 17px; line-height: 1.8;">
                    <li>✔️ فريق عمل مدرّب وذو خبرة طويلة</li>
                    <li>✔️ أسطول حديث من سيارات النقل المجهزة</li>
                    <li>✔️ تغليف احترافي وآمن</li>
                    <li>✔️ خدمة رفع عفش بالونش</li>
                    <li>✔️ أسعار منافسة وعروض مميزة</li>
                    <li>✔️ التزام بالمواعيد ورضا العملاء</li>
                  </ul>
                </div>

                <div class="col-md-5 text-center">
                  <img src="images/logo.png" alt="شركة الضمان الذهبي لنقل العفش" class="img-fluid rounded shadow">
                </div>
              </div>
            </div>
          </section>
        </div>

        <section class="contact">
          <h2>اتصل بنا الآن</h2>
          <p>للحصول على خدمة نقل عفش متميزة بأسعار مناسبة، اتصل بنا اليوم لترتيب معاينة مجانية من قبل مندوبنا المتخصص.</p>
          <p><i class="fas fa-phone"></i> هاتف: 0559160622</p>
          <br>
          <a href="https://wa.me/966559160622" target="_blank" class="btn-primary">
            اطلب خدمة الآن
          </a>
        </section>

        <!-- Visit Logs Section (for debugging - can be removed in production) -->
        <section class="visit-logs" style="margin-top: 40px; padding: 20px; background-color: #f0f0f0; border-radius: 8px;">
          <h3>إحصائيات الزيارات</h3>
          <p>عدد الزيارات: {{ visitCount }}</p>
          <button (click)="downloadLogs()" class="btn-primary" style="margin-left: 10px;">تحميل سجل الزيارات</button>
          <button (click)="clearLogs()" class="btn-primary">مسح السجلات</button>
        </section>
      </div>

      <footer>
        <div class="container">
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/966559160622"><i class="fab fa-whatsapp"></i></a>
          </div>
          <p>مؤسسة الضمان الذهبي لنقل الاثاث - خدمات نقل عفش مع الفك والتركيب والتغليف والضمان في جميع أنحاء المملكة العربية السعودية</p>
          <p>جميع الحقوق محفوظة ©2023</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    /* تنسيقات عامة */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .furniture-page {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* ترويسة الصفحة */
    header {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/logo.png');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 40px 0;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .logo {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .tagline {
      font-size: 20px;
      margin-bottom: 20px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    /* قسم SEO الجديد */
    .seo-section {
      background-color: white;
      border-radius: 8px;
      padding: 40px;
      margin: 40px 0;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .seo-title {
      color: #1a5fb4;
      border-bottom: 2px solid #1a5fb4;
      padding-bottom: 15px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 32px;
    }

    .seo-image-container {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
    }

    .seo-image {
      width: 100%;
      max-width: 800px;
      height: 400px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a5fb4 0%, #0d3d6b 100%);
      position: relative;
    }

    .seo-image-content {
      text-align: center;
      color: white;
      padding: 20px;
      z-index: 2;
    }

    .seo-image-logo {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 15px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .seo-image-text {
      font-size: 24px;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    .seo-image::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
      border-radius: 8px;
    }

    .seo-content {
      line-height: 1.8;
      font-size: 18px;
    }

    .seo-content h3 {
      color: #1a5fb4;
      margin: 25px 0 15px;
      font-size: 24px;
    }

    .seo-content p {
      margin-bottom: 20px;
      color: #444;
    }

    .seo-keywords {
      background-color: #f0f7ff;
      padding: 20px;
      border-radius: 8px;
      margin: 30px 0;
      border-right: 4px solid #1a5fb4;
    }

    .keywords-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 15px;
    }

    .keyword {
      background-color: #1a5fb4;
      color: white;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 14px;
    }

    /* قسم الخدمات */
    .services {
      background-color: white;
      border-radius: 8px;
      padding: 30px;
      margin: 30px 0;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .service-title {
      color: #1a5fb4;
      border-bottom: 2px solid #1a5fb4;
      padding-bottom: 10px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 28px;
    }

    .service-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-top: 20px;
    }

    .service-item {
      background-color: #f8f9fa;
      padding: 0;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .service-item:hover {
      transform: translateY(-5px);
    }

    .service-img {
      height: 200px;
      overflow: hidden;
    }

    .service-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .service-item:hover .service-img img {
      transform: scale(1.05);
    }

    .service-content {
      padding: 20px;
    }

    /* قسم لماذا نحن */
    .why-us {
      background: linear-gradient(rgba(233, 247, 254, 0.9), rgba(233, 247, 254, 0.9)), url('assets/images/why-us-bg.jpg');
      background-size: cover;
      background-position: center;
      padding: 60px 30px;
      border-radius: 8px;
      margin: 40px 0;
      text-align: center;
      position: relative;
    }

    .why-us:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #e9f7fe;
      z-index: -1;
      border-radius: 8px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .feature {
      text-align: center;
      padding: 25px 15px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .feature i {
      font-size: 50px;
      color: #1a5fb4;
      margin-bottom: 20px;
    }

    /* معرض الصور */
    .gallery {
      margin: 50px 0;
    }

    .gallery-title {
      color: #1a5fb4;
      text-align: center;
      margin-bottom: 30px;
      font-size: 28px;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }

    .gallery-item {
      height: 250px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    /* أسعار وتغطية */
    .pricing-coverage {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 30px;
      margin: 40px 0;
    }

    .pricing, .coverage {
      background-color: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .coverage-map {
      margin-top: 20px;
      text-align: center;
    }

    .coverage-map img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    /* الاتصال */
    .contact {
      background: linear-gradient(rgba(26, 95, 180, 0.9), rgba(13, 61, 107, 0.9)), url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 60px 40px;
      border-radius: 8px;
      text-align: center;
      margin: 40px 0;
    }

    .btn-primary {
      background-color: #ff6b00;
      color: white;
      padding: 15px 35px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
      display: inline-block;
      text-decoration: none;
    }

    .btn-primary:hover {
      background-color: #e55d00;
      transform: translateY(-2px);
    }

    /* التذييل */
    footer {
      background-color: #0d3d6b;
      color: white;
      text-align: center;
      padding: 30px;
      margin-top: 50px;
    }

    .social-icons {
      margin: 20px 0;
    }

    .social-icons a {
      color: white;
      font-size: 24px;
      margin: 0 10px;
      transition: color 0.3s;
    }

    .social-icons a:hover {
      color: #ff6b00;
    }

    .visit-logs {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    /* التجاوب مع الشاشات المختلفة */
    @media (max-width: 768px) {
      .pricing-coverage {
        grid-template-columns: 1fr;
      }

      header {
        padding: 30px 0;
      }

      .logo {
        font-size: 28px;
      }

      .tagline {
        font-size: 18px;
      }

      .seo-image {
        height: 300px;
      }

      .seo-image-logo {
        font-size: 28px;
      }

      .seo-image-text {
        font-size: 18px;
      }

      .seo-content {
        font-size: 16px;
      }

      .keywords-list {
        justify-content: center;
      }
    }
  `]
})
export class FurnitureTransportationComponent implements OnInit {
  visitCount = 0;

  keywords = [
    'نقل عفش جدة',
    'شركة نقل أثاث الرياض',
    'فك وتركيب عفش',
    'تغليف العفش',
    'نقل عفش مكة',
    'نقل عفش المدينة المنورة',
    'نقل عفش الدمام',
    'نقل عفش الخبر',
    'نقل المكاتب',
    'تخزين العفش',
    'فك وتركيب المطابخ',
    'فك وتركيب المكيفات',
    'أفضل شركة نقل عفش',
    'أسعار نقل العفش'
  ];

  services = [
    {
      title: 'فك وتركيب العفش',
      description: 'فنيون متخصصون محترفون في فك وتركيب جميع أنواع غرف النوم، المطابخ، المكيفات، الستائر، النجف، والسخانات.',
      image: 'assets/images/1.png'
    },
    {
      title: 'تغليف العفش',
      description: 'نستخدم مواد تغليف عالية الجودة لحماية عفشكم من الخدوش والتلف أثناء عملية النقل.',
      image: 'assets/images/cover.jpeg'
    },
    {
      title: 'نقل العفش',
      description: 'سيارات مقفولة ومجهزة بشكل خاص لنقل العفش إلى جميع أنحاء المملكة العربية السعودية.',
      image: 'assets/images/tran.jpg'
    },
    {
      title: 'خدمة الضمان',
      description: 'نقدم ضماناً على خدماتنا لضمان رضاكم التام عن جودة العمل المقدم.',
      image: 'assets/images/quality.png'
    }
  ];

  features = [
    {
      icon: 'fas fa-truck-moving',
      title: 'سيارات مجهزة',
      description: 'سيارات نقل مقفولة ومجهزة خصيصاً لنقل العفش بأمان'
    },
    {
      icon: 'fas fa-user-cog',
      title: 'فنيون متخصصون',
      description: 'فريق من الفنيين المحترفين في فك وتركيب جميع أنواع العفش'
    },
    {
      icon: 'fas fa-tag',
      title: 'أسعار مناسبة',
      description: 'أسعارنا تنافسية وتحدد بعد المعاينة من قبل المندوب'
    },
    {
      icon: 'fas fa-award',
      title: 'جودة مضمونة',
      description: 'نضمن لكم خدمة عالية الجودة من البداية حتى النهاية'
    }
  ];

  galleryImages = [
    { src: 'assets/images/gallery1.jpeg', alt: 'نقل عفش في الرياض' },
    { src: 'assets/images/gallery2.jpeg', alt: 'تغليف العفش' },
    { src: 'assets/images/gallery3.jpeg', alt: 'فك وتركيب' },
    { src: 'assets/images/gallery4.jpeg', alt: 'سيارة نقل مجهزة' },
    { src: 'assets/images/gallery5.jpeg', alt: 'مواد التغليف' },
    { src: 'assets/images/gallery6.jpeg', alt: 'فنيون محترفون' }
  ];

  serviceCities = [
    'جدة',
    'الرياض',
    'حائل',
    'مكة المكرمة',
    'المدينة المنورة',
    'الدمام',
    'الخبر',
    'وغيرها من المدن والمناطق'
  ];

  constructor(private visitLoggerService: VisitLoggerService) {}

  ngOnInit(): void {
    this.updateVisitCount();
  }

  private updateVisitCount(): void {
    const logs = this.visitLoggerService.getAllVisitLogs();
    this.visitCount = logs.length;
  }

  downloadLogs(): void {
    this.visitLoggerService.downloadVisitLogs();
  }

  clearLogs(): void {
    this.visitLoggerService.clearLogs();
    this.updateVisitCount();
  }
}