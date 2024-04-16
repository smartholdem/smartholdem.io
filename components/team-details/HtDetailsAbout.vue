<template>
  <div class="team__details-about">
    <div class="container">
      <div class="team__details-about-border pt-90 pb-65">
        <div class="row justify-content-center">
          <div v-show="$i18n.locale === 'ru'" class="col-lg-8">
            <div
                class="team__details-about-content"
                data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
            >
              <img src="~/assets/img/sth/ht/ht1.png" alt="ht1"/>
              <h3 class="team__details-about-title text-center">Добро пожаловать в PvP-игру на блокчейне «Орёл или
                Решка»</h3>
              <p>
                «Орёл или Решка» — простая игра, здесь только два игрока, блокчейн и одна монета.
              </p>
              <p>
                Вы можете начать новую игру со своей ставкой или выбрать существующую, угадав сторону монеты «Орёл» или
                «Решка». Побеждает тот игрок, который правильно выбрал сторону монеты.
              </p>
              <p>
                Все игры происходят только между игроками!
              </p>
              <img src="~/assets/img/sth/ht/ht2.png" alt="ht2"/>

              <p>
                У монеты две стороны - «Орёл» и «Решка». Создавая свою игру вы шифруете информацию о стороне монеты в
                блокчейне SmartHoldem. Только Вы знате, какую сторону выбрали при создании ставки.
              </p>
              <p>В игру можно играть двумя способами:</p>
              <p>
                - 1й способ: Вам необходимо угадать сторону. Первый игрок выбирает игру и пытается угадать сторону
                монеты.
                Если Вы правильно выбрали сторону, это означает, что Вы победитель и Вы только что удвоили свою ставку!
                Выигрыш автоматически зачисляется на ваш баланс.
              </p>
              <p>
                - 2й способ: Вы выбираете сторону монеты и создаете игру, а другой игрок пытается угадать сторону. Если
                игрок не угадал сторону, которую Вы выбрали, Вы становитесь победителем и удваиваете свою ставку!
              </p>
              <div class="team__details-about-list pt-10 mb-35">
                <ol>
                  <li>Минимальная ставка 10 STH. Максимальная ставка без лимитов.</li>
                  <li>В случае выигрыша, вы получите удвоенную ставку, за вычетом игровой комиссии 4%</li>
                  <li>В игре «Орёл или Решка» обязательно один из двух игроков станет победителем!</li>
                  <li>Если в течении 30 дней ваша ставка не сыграла, она возвращается на ваш баланс за вычетом комиссии
                    сети 1 STH
                  </li>
                </ol>
              </div>
              <img src="~/assets/img/sth/ht/ht3.png" alt="ht3"/>
              <h3 class="team__details-about-title text-center">Как работает блокчейн игра<br/>«Орёл или Решка»</h3>
              <div class="team__details-about-list pt-10 mb-35">
                <ol>
                  <li>Игры сохраняются в блокчейне SmartHoldem;</li>
                  <li>Ставки хранятся в хешированном формате SHA-384 и RIPEMD-160;</li>
                  <li>Проверить достоверность игровых данных можно через сервис https://hasher.link. Для этого
                    необходимо преобразовать предоставленную SALT готовой игры в SHA384, а затем составить строку,
                    состоящую из ставки 0-Орёл/1-решка + полученный хеш SHA384, получить из составленной строки хеш
                    RIPEMD-160 и он должен быть равен хешу в примечании к транзакции игрока, создавшего игру, начиная со
                    2-го байта;
                  </li>
                  <li>Вы можете в любой момент проверить свои завершенные и выигрышные транзакции в обозревателе блоков
                    SmartHoldem: <a class="text-primary" target="_blank" href="https://blockexplorer.smartholdem.io">blockexplorer.smartholdem.io</a>
                  </li>
                </ol>
                <p class="text-success">Выплаты производятся автоматически после каждой выигранной игры на ваш
                  баланс.</p>
                <h3 class="team__details-about-title text-center">Статистика</h3>
                <p>
                  Вы можете зайти в раздел «Моя статистика», чтобы просмотреть подробную статистику по вашим играм. Этот
                  интерфейс предоставляет информацию о количестве сыгранных вами игр и проценте удачи. Если вы хотите
                  сбросить игровую статистику, включая коэффициент выигрышей/проигрышей и процент удачи, вы можете
                  выбрать опцию «Сбросить данные» в меню игры.
                </p>
                <h3 class="team__details-about-title text-center">Партнёрская программа</h3>
                <p>
                  Партнёрская программа игры позволяет вам получать вознаграждения, делясь своей реферальной ссылкой с
                  другими игроками. Ваш SmartHoldem-адрес в игре «Орёл или Решка» — это ваш уникальный партнерский код.
                  Каждый раз, когда ваши друзья используют вашу реферальную ссылку и выигрывают, вы получаете 1% от их
                  выигрыша, а они получают дополнительно 1% к их выигрышу. Это беспроигрышная ситуация для всех
                  участников!
                </p>
                <img src="~/assets/img/sth/ht/ht4.png" alt="heads tail decentralized blockchain game"/>
              </div>
            </div>
          </div>

          <div v-show="$i18n.locale !== 'ru'" class="col-lg-8">
            <div
                class="team__details-about-content"
                data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
            >
              <img src="~/assets/img/sth/ht/ht1.png" alt="ht1"/>
              <h3 class="team__details-about-title text-center">Welcome to the "Heads or Tails" blockchain PvP
                game!</h3>
              <p>
                "Heads or Tails" is a simple game involving two players and a coin. The coin has two sides – "Heads" and
                "Tails".
              </p>
              <p>
                You can start a new game with your bid or choose an existing one by guessing one "Heads" or "Tails" side
                of the coin.
                The information about every side of the coin is encrypted and saved in the blockchain.

              </p>
              <p class="text-success">
                All games take place only between players!
              </p>
              <img src="~/assets/img/sth/ht/ht2.png" alt="ht2"/>


              <h3 class="team__details-about-title text-center">There are two methods to play the game:</h3>

              <p>
                - 1st method: You need to guess the side. The first player chooses a game and tries to think of the side
                of the coin. If you choose the correct side, you win and double your stake! You always get your winnings
                in your wallet immediately.
              </p>
              <p>
                - 2nd method: You choose the side of the coin and create a game, and the other player tries to guess the
                side. If the other player fails to think about the side you previously chose, you win and double your
                bid!
              </p>
              <div class="team__details-about-list pt-10 mb-35">
                <ol>
                  <li>The player who correctly guessed the side of the coin wins.</li>
                  <li>The minimal bid is 10 STH. The maximum bid is not limited.</li>
                  <li>If you win, you will receive a double stake minus the game commission of 4%</li>
                  <li>If the player correctly guesses the side of the coin, the prize is doubled.
                  </li>
                </ol>
              </div>
              <p>In all cases, one of the two players wins this game.</p>
              <p>
                The interface includes statistics on the number of games played and the percentage of luck. You can
                reset your game statistics, including win/loss rate and luck percentage, by selecting the "Reset Data"
                option in the game menu.

              </p>
              <img src="~/assets/img/sth/ht/ht3.png" alt="ht3"/>
              <h3 class="team__details-about-title text-center">How it works</h3>
              <div class="team__details-about-list pt-10 mb-35">
                <ol>
                  <li>The games are saved at SmartHoldem blockchain;</li>
                  <li>The bids are stored in SHA-384 & RIPEMD-160 hashed format;</li>
                  <li>You can check the validity of game data via https://hasher.link service. To do this, you must
                    convert the provided SALT of a finished game into SHA384, and then compose a line consisting of the
                    stake 0-head / 1-tail + received SHA384 hash, get the RIPEMD-160 hash from the composed line, and it
                    should be equal to the hash in the note to the transaction of the player who created the game,
                    starting from the 2nd byte;
                  </li>
                  <li>You can check your completed and winning transactions at any time in the SmartHoldem block
                    explorer: <a class="text-primary" target="_blank" href="https://blockexplorer.smartholdem.io">blockexplorer.smartholdem.io</a>
                  </li>
                </ol>
                <p class="text-success">The payments are made automatically after each game.</p>
                <h3 class="team__details-about-title text-center">Statistics</h3>
                <p>
                  You can go to the "My statistics" section to view detailed statistics on your games. This interface
                  provides information on the number of games you have played and the percentage of luck involved. If
                  you want to reset your game statistics, including your win/loss rate and luck percentage, you can
                  select the "Reset Data" option in the game menu.
                </p>
                <h3 class="team__details-about-title text-center">Affiliate Program</h3>
                <p>
                  The game's affiliate program enables you to earn rewards by sharing your referral link with other
                  players. Your SmartHoldem address within the "Heads or Tails" game is your unique affiliate code.
                  Whenever your friends use your referral link and win, you get 1% of their winnings, and they get an
                  additional 1% on top of their winnings. It's a win-win situation for everyone involved!
                </p>
                <img src="~/assets/img/sth/ht/ht4.png" alt="heads tail decentralized blockchain game"/>
              </div>
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
