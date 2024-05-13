<template>
  <section class="servivces__area pt-110">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">{{$t('innovation')}}</span>
            <h4 class="section__title-6">{{$t('scale')}}</h4>
          </div>
        </div>
        <div class="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-md-6">
          <div class="services__more-4 mb-65">
            <p>{{$t('create_dapp')}}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in services_data" :key="item.id" class="col-xxl-4 col-lg-4 col-md-6">
          <div class="services__item-4 mb-30 transition-3 fix"
          data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000">
            <div class="services__thumb-4 include-bg transition-3"
            :style="{ backgroundImage: `url(${item.bg})` }">
            </div>
            <div class="services__icon-4 mb-30 transition-3">
              <span><img :src="item.icon" alt=""></span>
            </div>
            <div class="services__content-4 transition-3">
              <h4 class="services__title-4">
                <nuxt-link :to="localePath(item.page)">{{ item.title }}</nuxt-link>
              </h4>
              <p>{{ item.subtitle }}</p>
            </div>
            <nuxt-link :to="localePath(item.page)" class="services-link-btn">{{$t('more')}} <i class="fa-regular fa-arrow-right"></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// bg images lawyer
import bg_law_1 from '~/assets/img/sth/fn1.png';
import bg_law_2 from '~/assets/img/sth/fn2.png';
import bg_law_3 from '~/assets/img/sth/fn3.png';
import bg_law_4 from '~/assets/img/sth/fn4.png';
import bg_law_5 from '~/assets/img/sth/fn5.png';
import bg_law_6 from '~/assets/img/sth/fn6.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      services_data: [
        {
          id: 1,
          delay: '130',
          bg: bg_law_1,
          icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAA10lEQVRoge3asQnCUBhF4ROxELew0i2cwAWsHUBwALdxA7GydwbBDawFC4kEIkQxjXjDJdwPAuGHvMchIdWjbwpVT7kcb4BFdVuPqr2GwLbY3Y6qfYeqhYEZMP8ynwKyoIFqYeDeMi9b5n+hfEN74AI8gDUwUYa8KIMO9VVZCfd5o/zkmmQ/n09dBXUmQe4S5C5B7hLkLkHuEuQuQe4S5C5B7hLkLkHuEuQuQe4S5C5B7hLkLkHuEuQuQe4S5C5BPxo1HpMek1EeXmo6Adf6aNm5oz17AHgC9Y8SOPaPvhQAAAAASUVORK5CYII=`,
          title: this.$t('arch_t1'),
          subtitle: this.$t('arch_text1'),
          page: "/about-wallet"
        },
        {
          id: 2,
          delay: '150',
          bg: bg_law_2,
          icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAACWklEQVRoge2aPWhUQRRGz3MFJYUiFilU1ICQTiJ2KWwEC0knImkMliGgacSgjWA0oqBioWAVxSAWFlYWNiFdKokmlY1iLIIhbOL/X2TgE56Lwu7c+zaDzIGQ3SHz5p69b+bOvA3/G4XFZ7W/4yBwFVhy+lxqwBfgeDHx8W3MBdYbA9gN7DVeo5GfQEds53XGwX8Y+/+Nz5KKwpqhMi+BO7plWmUnMOwRhKfQO+A2sBzRt8tLyHrLeeEWRypCbqQiFL0INOIpZKlpW7yC8Fy2v4VaG3GNHuBB6X3N8uFYV7mnwIBkllRDmiUEfhS4AmxTnw/AJLCyVkLzwHhEv83ASWAQ6FRbHbgHXAIWYgPyrEPNEgQuKDub1CfUrhHgrrIUTTuFwrzYB9wAejXfViRwTLeamXYu2/3KQK/eh/k2AxzwkqGNGToLnNAWB8k8As4AbzwHqlpoI3ATOATsUNuyVrbrwHvvAasSCvOlW4EfVluoWS+Ai8DDisatRCjMyz7gHLC/1D4FjKp2VUYVQkPAKZ1mfzOhzMxWKYOzUKGieLrUtiqRa8Ci41j/xEsonDjHgCMS+w68Bi7rFBuzx4vCKlSorozqd01HgWnJPPYKtFmsQj3af22XDJI4Dzxrj8KfeAjt0uuQmVsqonXPIFvBuvUpz425tZbBeS9X9zxKx+IpZDppepGf+qROFkqdLJQ6WSh1slDqZKHUyUKpk4VSJwuljueT0636yqSV71kbKfRzP/Zhi6fQHj3ytfIJeBIrZL3lak38TatssMRlzdAr4LnzPwB+VZYyAL8Axxxmb1DxudIAAAAASUVORK5CYII=`,
          title: this.$t('arch_t2'),
          subtitle: this.$t('arch_text2'),
          page: "/about-decentralize"
        },
        {
          id: 3,
          delay: '170',
          bg: bg_law_3,
          icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAACb0lEQVRoge3aTYhOURzH8c8YL9Ng5GVlIzsvzUKxU4ryWkqIRsrLBovJhkSKlKWGJIqNNJE9WShS1qPsLAyJhULJeJ0ZnTpTt2kW5p7zPM8d3V/deu6p8z/ne87/nP/53/P439SWwjPa07kXhzE947iMYk9b/9DHMpVTO7IU6zAj0U5RAWg+SgFNS2z8B0YSbUykP2Ur5nSV7ziN4UkO1G8sx37MS+1EbqC+knXXY2cOoFSXy6W21A1qTFUByqaqAI3GJ1mpQFncBJ2YmcNQ6qYwEnepMDCDJW2swUnMLZSVnq1UoCc4Fn//nGTdMLtbcAMLCzP0GB/KdigVaCA+k1VnPDL1xdkdjvX7cSQG7JYAldESHI/PmL7gOi5iKMV4s4FW4yy2FsoGI8idGJyT1EygjbHj3bHdsPBfohdPc23bzQDqwCFcwIJC+XP04G3OxpoBdBkhb+oqlD3AtkY01oyTQtjBfo0rG4hbdXY1A6g3rp03hbKQZlzCiqkIFJK1qzg6LmbtwxWszdlYsw6n4Xj0EDvwKB6Z2rEB97BrqqYPIeZsxm28j2WLcRNnMCe1gValDwdxC+/ie8hUT8XTwqIUw63Mh87hBF7F99nYjvspRlsJFNbRXeyOp3YxhViFZWWNpgbWTXFBh+9yr3G+hI0XcQvvjrGpa4K49c9KBQrJ2YFo51NJoKCvJfKpCZXqct8KuUyK2nO5f/3Vp+qqgaquGqjqqoGqrhqo6qqBqq4aqOqqgaquGqhBynYLnvP2oSN+7i3z15iV8ZoyWTmBQoeuZbRXSqkuN6tBblt6oFNnKFyRPGvAHwA/Z7Q3hYW/xZpkOqgXaRYAAAAASUVORK5CYII=`,
          title: this.$t('arch_t3'),
          subtitle: this.$t('arch_text3'),
          page: "/about-forging"
        },
        {
          id: 4,
          delay: '190',
          bg: bg_law_4,
          icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAABK0lEQVRoge2aPUoDURRGT+IPmjKIhYU7MAuwsM0C0mUFsXADli7ABdgKNpZ2thFX4DqUCCbYGHkwgdf67oV8yHeqO8X75h54b4a5DP+NXtRnPR08AsdAH7gD7hujroEx8AM89R6Wty0hu403rzkHTrrr50DOGXDR1QugSagfaGDDV1V/B3JWVb1uDckQksJC6lhIHQupYyF1LKSOhdSxkDoWUkdJqPkrtSZjprChNHQKjICDP64tM4SjjCYyhcoE6RKYNa5P2S0ZQntVvfUtnCH0DuwHz0BZOwCG0WYyhK664WCET+AGmESbyRB6TcgofGSEKD22dzJC/GJVx0LqWEgdC6ljIXUspI6F1LGQOhZSx0LqKAkdVnXzf3yZo+Aob8BLN+ObC/W1RYBf5BEe3Tps8+gAAAAASUVORK5CYII=`,
          title: this.$t('arch_t4'),
          subtitle: this.$t('arch_text4'),
          page: "/about-community"
        },
        {
          id: 5,
          delay: '210',
          bg: bg_law_5,
          icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAACV0lEQVRoge3aT4iNURjH8c+dsRhKLLDxJ4uRzVgqyUaslI2N/NtIKaWYFLIxVkpNka0mZChSbCYpG2Uhf9ZKMYn8jRDSmNFb59brdjf3Pee99x2937p1z6n3Oef3Puc855znPf43GjF6ZnbOW4ob+I3pBO+mD/04hEeN8R8dG5gT2YG5WBdpox0r8Th7Z50+2BfZcAqvtONX0QdjPZQn68QZfIq0k3n9aRHvSCxoAGN4kdBmx8QOucpRC6o6taAWWhfm21iVpGcFiRX0HffRXNKHcA9beuX92EbfYReu4VuoWxbC9zDmJ+hjR6R4i69wBCdzopbgBE6H/10j1bD4jFFsx0d8xUIcwDhWzzZBTSawAc9z82pT2JFvTdxWW8qYuM+wDXfwM9QNBQ8eLqG9fygrEk1iL87m5tVgEHSuzAhYZmj9guM4GHbgU1geytfDmSc53VgrLmJHOLA1yYbkFWxO3YduLX53Q8S7latbj/PYn7Khbq7mT4Ko0VxdFs6P4VSqRrq9PXmDoyEJMhnm1Yow17LdxaLYBnqx35oK0W84HLWnw8l5D65ibYzxXh4fbgZPTYRylr7aGILFmqJGe30eeoB9uBA81R+OH4NFc4axgrKN52VcCr/FBWy8DcPvda6ucAI0NuuzALtz5RF8KGBnJiYXlyfWQ39aykUTj43YtHSTOqdQdWpBVacWVHVqQVWnFlR1akFVpxZUdWpBVacWVBKFbo20I/XVmCy39r7AswPhSkw0qa/GjCS0V4jYIVfWkC1sN9ZD2Re6hyVcAHyZcl7NXvAX03pgud8c5wcAAAAASUVORK5CYII=`,
          title: this.$t('arch_t5'),
          subtitle: this.$t('arch_text5'),
          page: "/about-wallet"
        },
        {
          id: 6,
          delay: '230',
          bg: bg_law_6,
          icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAACcUlEQVRoge2aT0jUURDHP7bWhgmhkl3yYkTQIYTo0CmROngQukS0RAQdtFNUIFGHrhpepCICOxTlQZCiLh2DrtFV8BJkGCJigYhuf4yBEX6GLuub2d8+431O/h6+mff9vdl582aX/40Gi561UlMJuALsdnwvS8C1hvHlryGTG43ODwOngT1GO1l+AK1AkKBdRuerslFGG5vxK3SidYeyLABDKnI7L6oMHNPQbbYuwlvQSODcHuCChyBryGWxJBi3dXgKioIkqAIFYJ/7CreJp6AO4CFwMGDuH+CnZryy5SjwzHJSLVwGDgF3gY+60GqYAm4ARRU0E7oIT0HojksKfgYMAm+rnPcNmPBagDdisxOYBAZqYD83QfMqAq3tJAQfa/XQ7uinIp6CvgOXgNvAcmZcPhuPgOOOvrbEu1KQD/QwcBGY03HZrT7gKXDK0d+meAsq6N9vgJPAtD4XtQB9pWI9708bqGWlIKn3KPBen5v0jHqpYdlWC6d5lD4Sbg+AFX2WnbynlfkRb2d5CFrSM6kfmNUxCc2SJosTns7yKk5ld54DZzKiJFmcBV4D570O+byr7Sk9dD9lxqRUegLcAfZaHdTj+rCqGfBFpghtAW4CY9aKvV73ISlarwLXtcsj7Ad6gXcWw/W84JU1+50DvuhYq1YUXaFGY7ixyjk1qqGIhmE51FgsV/DZzDllIhZBjda29DqpSRI7SVDsJEGxkwTFThIUO0lQ7CRBsZMExU4SVAHpBfw2zHXB8yvJA8B9/Z6oUMX/ryO9hG5t5pvxFCR9tVuO9oKwhlzRq7nxD8Ev2rpDn4EPNfgB4KKjvR0M8Bc/yFw4dFbIdwAAAABJRU5ErkJggg==`,
          title: this.$t('arch_t6'),
          subtitle: this.$t('arch_text6'),
          page: "/web3-games"
        }
      ]
    }
  }
}
</script>

