# Shiroi
BBM (block builder) and validator client for Solana

# Submission to 2025 Solana Colosseum Submission by:
- Semyon Golovin. Founder. [GitHub](https://github.com/semgoSE). [TG](https://t.me/semgoSE). [X](https://x.com/semgoSE).
- Evgeny Malogritsenko. Project manager. [GitHub](https://github.com/Noname400). [TG](https://t.me/nonexhunt). [X](https://x.com/DevnpSol).
- Semen Golovchenko. Backend Dev. [GitHub](https://github.com/iFrosta). [TG](https://t.me/ifrosta). [X](https://x.com/ifrosta).
- Khramtsovskii Igor. Community manager. [TG](https://t.me/hagtyf). [X](https://x.com/YmkaAvadol)
- Maxim Afanasyev. Ceo. [TG](https://t.me/maxnutrition). [X](https://x.com/_Marakaya)

# Resources
- ссылка на презентацию проекта
- ссылка на видео о проекте
- ссылка на само приложение (если есть)
- ссылка на сайт проекта (если есть)
- ссылка на социальные сети проекта (должны быть!)
- другие ссылки на ресурсы вашего проекта

# Problem and solution
1. High latency:
- RPC → TPU → Banking Stage causes 300–500 ms delay and missed arbitrage.
- BBM: Direct Trader → BBM with pre-simulation cuts latency to 50–100 ms.
2. Inefficient block assembly:
- Validators fill blocks only 70–80 %, wasting compute on conflicts.
- BBM: Parallel processing, conflict resolution, optimized bundles.
3. Limited transaction logic:
 - Solana lacks conditional execution and privacy.
 - BBM: Adds conditional and atomic bundles with concealed content.
4. App-controlled execution:
- Validators dictate order, enabling MEV.
- BBM: Lets apps set their own auction logic and fair ordering.
# Summary of Submission Features
Здесь можно перечислить список сервисов и технологических решений, которые вы используете в своем продукте.
Проект Tap заполнил этот раздел так:
   - SSO with Gmail
   - Multi-sig “semi-custodial” cash account
   - Credit Card onramp
   - Feeless peer-to-peer transfers
   - Parsed Solana Transactions Activity Feed
   - Live on Solana Devnet
   - Live on Android

# Tech Stack
Расписываем какие языки, фреймворки, библиотеки и SDK были использованы в вашем проекте.

# Architecture
В этом разделе можно в виде схемы изобразить архитектуру вашего проекта, какие элементы есть, как они друг с другом взаимодействуют и как выглядит взаимодействие пользователя с вашим проектом (по этапам)

# Quick start
Небольшой мануал как быстро запустить ваш проект. Если есть возможность склонировать ваш репозиторий и локально его запустить, распишите все зависимости и напишите простой мануал, чтобы жюри смогли запустить его локально. Обязательно проверьте на чистом сервере, чтобы точно все запустилось и работало.

