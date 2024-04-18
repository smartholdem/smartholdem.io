<template>
  <div class="team__details-about">
    <div class="container">
      <div class="team__details-about-border pt-90 pb-65">
        <div class="row justify-content-center">
          <div v-show="$i18n.locale === 'ru'" class="col-lg-8">
            <div
                class="team__details-about-content"
            >
              <!--data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"-->
              <img src="~/assets/img/sth/2fa/1.png" alt="smart 2fa 1"/>
              <h3 class="team__details-about-title text-center">2FA ещё лучше с Smart2FA</h3>
              <p>
                Обзор функции Smart2FA:
              </p>
              <div class="team__details-about-list pt-10 mb-35">
                <ul>
                  <li>Бесплатное приложение с открытым исходным кодом</li>
                  <li>Поддержка стандартного алгоритма TOTP</li>
                  <li>Просмотр чистых данных и ключей</li>
                  <li>Загрузка токенов авторизации 2FA с сайтов по QR или вводу кода</li>
                  <li>Поддержка веб-камеры для сканирования qr-кодов</li>
                  <li>Поддержка пользовательского Пин-кода</li>
                  <li>Генерация QR для экспорта ключа RAW на другое устройство</li>
                  <li>Встроенная автосинхронизация времени токена</li>
                  <li>Кроссплатформенность. Вы можете использовать Smart2FA Authenticator Desktop в простом и удобном
                    интерфейсе на macOS, Windows и Linux.
                  </li>
                  <li>Резервные копии с 256-битным шифрованием AES. Экспортируйте зашифрованные файлы JSON с ключами на
                    настольное устройство. Это позволяет вам полностью контролировать свои данные и обеспечивает
                    эффективное резервное копирование.
                  </li>
                </ul>
              </div>
              <p>
                <a class="text-primary" href="https://github.com/technologiespro/smart2fa/releases">Скачать приложение
                  Smart2FA</a> для устройств macOS, Windows и Linux
              </p>
              <p>
                Snapcraft <a class="text-primary" href="https://snapcraft.io/smart2fa">https://snapcraft.io/smart2fa</a>
              </p>
              <img src="~/assets/img/sth/2fa/2.png" alt="smart 2fa 2"/>
              <h3 class="team__details-about-title text-center">Легко, эффективно и безопасно</h3>
              <p>Удвойте безопасность своих приложений, включив двухфакторную аутентификацию (2FA) с помощью Smart2FA
                для своих онлайн-сервисов.</p>
              <h3 class="team__details-about-title text-center">Какие угрозы устраняет 2FA?</h3>
              <p>Двухфакторная аутентификация обеспечивает дополнительный уровень защиты от многих наиболее
                распространенных типов киберугроз. Приложение Smart2FA защищает от фишинга, социальной инженерии и атак
                с подбором паролей. Не идите на компромисс с безопасностью, начните использовать 2FA сегодня!</p>
              <h3 class="team__details-about-title text-center">TOTP 2FA</h3>
              <p>
                Одноразовый пароль на основе времени (TOTP) — это компьютерный алгоритм, который генерирует одноразовый
                пароль, используя текущее время в качестве источника уникальности. Пользователь вводит этот одноразовый
                пароль на веб-сайт или в приложение для получения доступа. Срок действия паролей, созданных
                аутентификатором Smart2FA, истекает через 30 секунд, и в следующий раз будет сгенерирован новый пароль.
              </p>
              <img src="~/assets/img/sth/2fa/3.png" alt="smart 2fa 3"/>
            </div>
          </div>

          <div v-show="$i18n.locale !== 'ru'" class="col-lg-8">
            <div
                class="team__details-about-content"
            >
              <!--data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"-->
              <img src="~/assets/img/sth/2fa/1.png" alt="smart 2fa 1"/>
              <h3 class="team__details-about-title text-center">2FA Made Easy With Smart2FA</h3>
              <p>
                Smart2FA Feature Overview:
              </p>
              <div class="team__details-about-list pt-10 mb-35">
                <ul>
                  <li>Free & open source</li>
                  <li>Support industry-standard TOTP algorithm</li>
                  <li>Pin-code</li>
                  <li>View clean data and keys</li>
                  <li>Downloading 2FA authorization tokens from sites via QR or by entering a code</li>
                  <li>Webcam support for scanning QR codes</li>
                  <li>Desktop/Mobile</li>
                  <li>Generation of a single QR to export a RAW key to another device</li>
                  <li>Cross-Platform. Our Smart2FA Desktop application for macOS, Windows, and Linux devices provides a
                    simple and convenient interface for using Smart2FA Authenticator.
                  </li>
                  <li>Backups with AES 256-bit Encryption. Export encrypted JSON files with keys on your desktop device.
                    This process allows you to maintain full control over your data while ensuring effective backup.
                  </li>
                </ul>
              </div>
              <p>
                <a class="text-primary" href="https://github.com/technologiespro/smart2fa/releases">Download Smart2FA
                  desktop app for macOS, Windows, and Linux devices: </a>
              </p>
              <p>
                Snapcraft <a class="text-primary" href="https://snapcraft.io/smart2fa">https://snapcraft.io/smart2fa</a>
              </p>
              <img src="~/assets/img/sth/2fa/2.png" alt="smart 2fa 2"/>
              <h3 class="team__details-about-title text-center">Easy, Effective, and Secure</h3>
              <p>Double your application security by enabling two-factor authentication (2FA) with Smart2FA for your
                online services.</p>
              <h3 class="team__details-about-title text-center">What Threats Does 2FA Address?</h3>
              <p>Two-factor authentication (2FA) is the foundational element of a zero-trust security model. The
                Smart2FA app protects against phishing, social engineering, and password brute-force attacks. Don't
                compromise on security, implement 2FA today!</p>
              <h3 class="team__details-about-title text-center">TOTP 2FA</h3>
              <p>
                The Time-Based One-Time Password (TOTP) is a computer algorithm that generates a one-time password using
                the current time as a source of uniqueness. The user enters this one-time password into the website or
                application to gain access. The passcodes created by Smart2FA authenticator expire after 30 seconds, and
                a new passcode will be generated the next time.
              </p>
              <img src="~/assets/img/sth/2fa/3.png" alt="smart 2fa 3"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
};
</script>
