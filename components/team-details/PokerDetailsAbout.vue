<template>
  <div class="team__details-about">
    <div class="container">
      <div class="team__details-about-border pt-90 pb-65">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div v-if="$i18n.locale === 'ru'"
                 class="team__details-about-content"
            >
              <!--
              data-sal="slide-up"
              data-sal-delay="130" data-sal-duration="1000"
              -->
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20">
                    <img
                        src="~/assets/img/sth/poker/blockchain-poker-club-menu.png" alt="blockchain poker"
                        class="rounded-3">
                  </div>
                </div>
              </div>
              <h3 class="team__details-about-title">Первый в мире Децентрализованный Покер Рум</h3>
              <p>
                Добро пожаловать в будущее покера, где блокчейн технологии объединяются с вековым азартом любимой игры.
              </p>
              <p>
                Blockchain Poker Club — это децентрализованная платформа для игры в Texas Hold'em, созданная на
                технологиях SmartHoldem.
              </p>
              <p>
                SmartHoldem — это революционная блокчейн-инфраструктура Web3 для игровой индустрии, предназначенная для
                создания честных, децентрализованных, прозрачных и неизменяемых игр.
              </p>
              <p>
                Blockchain Poker Club — это новое имя в мире онлайн-покера. Платформа предлагает игрокам множество
                преимуществ, позволяющих наслаждаться более безопасным, прозрачным и честным игровым процессом. Откройте
                для себя мир Web3 покера!
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/Screenshot-blockhain-poker-club.png"
                        alt="smartholdem poker gameplay" class="rounded-3">
                  </div>
                </div>
              </div>

              <h3 class="team__details-about-title">Знакомство с Blockchain Poker Club</h3>
              <p>
                Blockchain Poker Club — это новая покерная Web3 платформа, которая гарантирует прозрачность и
                безопасность игры для игроков.
              </p>
              <p>
                Blockchain Poker Club автоматизирует процессы с помощью блокчейна, TRNG SmartHoldem и криптографических
                функций. В отличие от традиционных покерных сайтов, Blockchain Poker Club не требует доверия к
                какому-либо серверу и центральному органу для управления транзакциями и результатами игр.
              </p>
              <p>
                Каждая игра в Техасский Холдем записывается в блокчейн SmartHoldem, создавая честную игровую среду и
                укрепляя доверие между игроками. Игроки всегда могут проверить достоверность результатов и убедиться в
                отсутствии мошенничества или манипуляции.
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/Screenshot-blockhain-poker-club-hand.png"
                        alt="smartholdem poker gameplay What is Blockchain Poker Club" class="rounded-3">
                  </div>
                </div>
              </div>
              <h3 class="team__details-about-title">Преимущества Web3 покера на блокчейне</h3>
              <p>
                Web3 Blockchain Poker предлагает множество преимуществ по сравнению с традиционными покерными сайтами, в
                том числе:
              </p>
              <h3 class="team__details-about-title">Нет Рейка</h3>
              <p>
                В децентрализованном Blockchain Poker Club нет рейка из-за отсутствия затрат на поддержку персонала,
                платы за серверы или других накладных расходов. Эта полностью автоматизированная блокчейн-платформа
                разработана игроками для игроков. Вместо рейка, взимается комиссия блокчейна в размере 1 STH (1STH = 1
                фишка) из банка за каждую покерную раздачу.
                В Blockchain Poker Club, Покер принадлежит Игрокам, в отличие от традиционных покерных сайтов, которые
                часто взимают высокий рейк, обычно составляющий от 2,5% до 10% от банка за каждую покерную раздачу.
              </p>
              <h3 class="team__details-about-title">Настоящее владение криптовалютой</h3>
              <p>
                В децентрализованном Blockchain Poker Club игроки всегда на первом месте. Ваш игровой аккаунт — это ваш
                адрес в блокчейне SmartHoldem с функциями криптокошелька, где никто не может ограничить ввод или вывод
                средств. Только Вы имеете доступ к вашим средствам и контролируете ваши приватные ключи. Депозит – без
                комиссий, Вывод – 10 STH. Игроки могут мгновенно наслаждаться своим выигрышем, не платя чрезмерных
                комиссий и не ожидая одобрения вывода средств.
              </p>
              <h3 class="team__details-about-title">SmartHoldem TRNG</h3>
              <p>
                Блокчейн повышает эффективность генераторов случайных чисел, обеспечивая 100% случайную, надёжную и
                справедливую перетасовку карт, которую можно проверить с помощью криптографических доказательств.
              </p>
              <p>
                Даже путешественник во времени не узнает окончательный результат раздачи.
              </p>
              <p>
                Откройте для себя
                <nuxt-link class="text-primary" :to="localePath('/rng')"><i class="fa fa-dice-d20"></i> SmartHoldem TRNG
                </nuxt-link>
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/blockchain-poker-card-deck.png"
                        alt="Blockchain Poker card deck" class="rounded-3">
                  </div>
                </div>
              </div>
              <h3 class="team__details-about-title">Безопасность</h3>
              <p>
                В Blockchain Poker Club транзакции защищены технологией блокчейн, что обеспечивает большую безопасность
                ввода и вывода средств. Кроме того, технология блокчейна гарантирует, что результаты раздач являются
                справедливыми и ими невозможно манипулировать.
              </p>
              <h3 class="team__details-about-title">Прозрачность</h3>
              <p>
                Благодаря технологии блокчейн каждая покерная игра прозрачно и надежно записывается в неизменяемый
                реестр. Игроки имеют доступ к результатам предыдущих игр, чтобы убедиться в отсутствии мошенничества.
                Такая полная прозрачность способствует доверию между игроками и гарантирует честность игры.
              </p>
              <h3 class="team__details-about-title">Глобальный доступ</h3>
              <p>
                Криптовалюта и блокчейн устраняют барьеры для входа, обеспечивая глобальный доступ к играм.
                Децентрализация позволяет игрокам управлять своими игровыми кошельками независимо от кого-либо.
                В Blockchain Poker Club нет географических ограничений. Игроки со всего мира могут участвовать в онлайн
                играх. Blockchain Poker Club создает мощное глобальное сообщество игроков и энтузиастов покера.
              </p>
              <h3 class="team__details-about-title">Дорожная карта</h3>
              <p>
                Разработа действительно децентрализованного покера заняла несколько лет. Нами было проведено неского
                бета-тестов, мы постарались учесть все пожелания участников. На данный момент, мы завершаем несколько
                важных этапов по развертыванию платформы на блокчейне, а именно подключаем модули создания турниров,
                интегрируем обновленный API SmartHoldem и добавляем функцию обмена криптовалюты в игровой кошелёк.
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/blockhain-poker-club-hand-players.png"
                        alt="Blockchain Poker players" class="rounded-3">
                  </div>
                </div>
              </div>
              <p>
                Присоединяйтесь к миру Web3 с Blockchain Poker Club, который обеспечивает повышенную безопасность,
                полную прозрачность, низкие комиссии, глобальную доступность и постоянные инновации.
              </p>
              <p>
                Приготовьтесь к захватывающему старту!<br/>
                Присоединяйтесь к нашим социальным сетям и будьте в курсе последних новостей!
              </p>

              <SthSocial/>


            </div>

            <div v-else
                 class="team__details-about-content"
            >
              <!--
              data-sal="slide-up"
              data-sal-delay="130" data-sal-duration="1000"
              -->
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20">
                    <img
                        src="~/assets/img/sth/poker/blockchain-poker-club-menu.png" alt="blockchain poker"
                        class="rounded-3">
                  </div>
                </div>
              </div>
              <h3 class="team__details-about-title">The world's first truly decentralized poker</h3>
              <p>
                Welcome to the future of poker, where advanced technology blends with the timeless excitement of the
                game.
              </p>
              <p>
                Blockchain Poker Club is a decentralized Texas Hold'em Poker platform using SmartHoldem.
              </p>
              <p>
                SmartHoldem is a game-changing Web3 blockchain infrastructure for the gaming industry, dedicated to
                creating fair, decentralized, transparent, and immutable blockchain games.
              </p>
              <p>
                Blockchain Poker Club is a new online poker era that offers players many benefits, allowing them to
                enjoy a more secure, transparent, and fair gaming experience. Discover the world of Web3 poker!
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/Screenshot-blockhain-poker-club.png"
                        alt="smartholdem poker gameplay" class="rounded-3">
                  </div>
                </div>
              </div>

              <h3 class="team__details-about-title">What is Blockchain Poker Club?</h3>
              <p>
                Blockchain Poker Club is a new Web3 poker platform that uses blockchain technology to guarantee game
                transparency and security.
              </p>
              <p>
                Blockchain Poker Club automates processes using blockchain, TRNG SmartHoldem, and cryptographic
                functions. Unlike traditional poker sites, it does not require trust in any server and a central
                authority to manage transactions and game outcomes.
              </p>
              <p>
                Thanks to blockchain technology, every Texas Hold'em game is recorded immutably and transparently.
                Players can verify the integrity of the results and ensure no cheating or manipulation, creating a fair
                gaming environment and fostering trust between players.
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/Screenshot-blockhain-poker-club-hand.png"
                        alt="smartholdem poker gameplay What is Blockchain Poker Club" class="rounded-3">
                  </div>
                </div>
              </div>
              <h3 class="team__details-about-title">The Advantages of Web3 Blockchain Poker</h3>
              <p>
                Web3 Blockchain Poker offers many advantages over traditional poker sites, including:
              </p>
              <h3 class="team__details-about-title">No Rake</h3>
              <p>
                The decentralized Blockchain Poker Club does not charge a rake due to the absence of staff support
                costs, server fees, or other overhead costs. This fully automated blockchain platform is designed by
                players for players. Instead of rake, a blockchain fee of 1 STH (1STH = 1 chip) is charged from the bank
                for each poker hand. At Blockchain Poker Club, Poker is owned by the Players, unlike traditional poker
                sites that often charge high rake, typically ranging from 2.5% to 10% of the pot for each poker hand.

              </p>
              <h3 class="team__details-about-title">True crypto ownership </h3>
              <p>
                At Decentralized Blockchain Poker Club, players always come first. Your gaming account is your address
                in the SmartHoldem blockchain with crypto wallet functions where no one can restrict deposits or
                withdrawals. You have constant access to your funds and control of your private keys. Deposit - Zero
                fee, Withdrawal - 10 STH. Players can enjoy their winnings immediately without having to pay excessive
                fees. No KYC!
              </p>
              <h3 class="team__details-about-title">SmartHoldem TRNG</h3>
              <p>
                Blockchain improves the efficiency of random number generators by providing 100% random, trustworthy,
                and fair card shuffling that can be verified using cryptographic proofs.
              </p>
              <p>
                Even a time traveler will not know the final result of the hand.
              </p>
              <p>
                Explore
                <nuxt-link class="text-primary" :to="localePath('/rng')"><i class="fa fa-dice-d20"></i> SmartHoldem TRNG
                </nuxt-link>
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/blockchain-poker-card-deck.png"
                        alt="Blockchain Poker card deck" class="rounded-3">
                  </div>
                </div>
              </div>
              <h3 class="team__details-about-title">Security</h3>
              <p>
                In Blockchain Poker Club, transactions are secured by blockchain technology, ensuring that deposits and
                withdrawals are much safer. Additionally, blockchain technology guarantees that the outcomes are fair
                and cannot be manipulated.
              </p>
              <h3 class="team__details-about-title">Transparency</h3>
              <p>
                Thanks to blockchain technology, every poker game is transparently and securely recorded. Players have
                access to previous game results to verify the absence of cheating. This complete transparency fosters
                trust among players and guarantees the integrity of the game.
              </p>
              <h3 class="team__details-about-title">Global Access</h3>
              <p>
                Cryptocurrency and blockchain remove barriers to entry, allowing global access to gaming.
                Decentralization will enable players to manage their game wallets independently of anyone else.
                Blockchain Poker Club has no geographical restrictions. Players from all over the world can participate
                in online games. Blockchain Poker Club is building a powerful global community of poker players and
                enthusiasts.
              </p>
              <h3 class="team__details-about-title">Roadmap</h3>
              <p>
                The development of truly decentralized poker took several years. We conducted several beta tests, and we
                tried to consider all the participants' wishes. We are currently completing several important stages in
                deploying the platform on the blockchain, namely connecting tournament creation modules, integrating the
                updated SmartHoldem API, and adding a cryptocurrency exchange function to the game wallet.
              </p>
              <div class="row">
                <div class="col-xl-12">
                  <div class="postbox__img-2 m-img mb-20 mt-40">
                    <img
                        src="~/assets/img/sth/poker/blockhain-poker-club-hand-players.png"
                        alt="Blockchain Poker players" class="rounded-3">
                  </div>
                </div>
              </div>
              <p>
                Join the world of Web3 with Blockchain Poker Club! Experience enhanced security, full transparency, low
                fees, global accessibility, and constant innovation.
              </p>
              <p>
                Get ready for an exciting launch!<br/>
                Join our social networks and stay updated with the latest news!
              </p>

              <SthSocial/>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import SthSocial from "~~/components/social/SthSocial.vue"

export default {
  mixins: [SalScrollAnimationMixin],
  components: {
    SthSocial
  }
};
</script>

<script setup lang="ts">
</script>
