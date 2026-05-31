/* ==========================================================================
   APP.JS - VANILLA JAVASCRIPT CONTROLLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* --------------------------------------------------------------------------
       1. LOCALIZATION DICTIONARIES (RU / EN)
       -------------------------------------------------------------------------- */
    const translations = {
        en: {
            startBtn: "Get Started",
            heroTitle: "Next-Gen Glassmorphic Communications",
            heroSubtitle: "Experience seamless, beautifully crafted simulated connections, directly inside your secure browser environment.",
            openApp: "Open Aether",
            whyUsTitle: "Why Choose Aether?",
            cardGlassTitle: "Pure Glassmorphism",
            cardGlassDesc: "A meticulously designed interface using backdrop filters, fine gradients, and dynamic light reflections to please your eyes.",
            cardStorageTitle: "Secure Local Storage",
            cardStorageDesc: "No remote databases. Your logins, friendship statuses, and chat histories are saved locally and securely inside your browser.",
            cardFeaturesTitle: "Simulated Experience",
            cardFeaturesTitleDesc: "Experience real-time interactive audio calls, customizable user statuses, rich multi-user groups, and responsive channels.",
            loginTitle: "Sign In",
            usernameLabel: "Username",
            passwordLabel: "Password",
            signInBtn: "Sign In",
            noAccountText: "Don't have an account? ",
            signUpLink: "Sign Up",
            registerTitle: "Sign Up",
            confirmPasswordLabel: "Confirm Password",
            signUpBtn: "Create Account",
            haveAccountText: "Already have an account? ",
            signInLink: "Sign In",
            customStatusPlaceholder: "No status set",
            searchPlaceholder: "Search chats, contacts...",
            tabChats: "Chats",
            tabGroups: "Groups",
            tabChannels: "Channels",
            tabContacts: "Contacts",
            createBtn: "Create Group/Channel",
            welcomeBackTitle: "Select a conversation",
            welcomeBackDesc: "Choose a friend, a group, or subscribe to a channel to start talking.",
            backToChats: "Show Chats",
            composerPlaceholder: "Write a message...",
            callConnecting: "Connecting...",
            callRinging: "Ringing...",
            callConnected: "Connected",
            callEnded: "Call Ended",
            callDeclined: "Call Declined",
            callBusy: "User is busy",
            createModalTitle: "Create Group or Channel",
            entityTypeLabel: "Type",
            radioGroup: "Group (Interactive)",
            radioChannel: "Channel (Broadcast)",
            entityNameLabel: "Name",
            entityDescLabel: "Description",
            cancelBtn: "Cancel",
            confirmCreateBtn: "Create",
            settingsTitle: "Settings & Profile",
            settingsProfileSec: "Profile Detail",
            settingsStatusLabel: "Custom Status",
            settingsPresenceLabel: "Presence Status",
            statusOnline: "Online",
            statusAway: "Away",
            statusDnd: "Do Not Disturb",
            settingsPrefsSec: "Preferences",
            settingsLangLabel: "App Language",
            settingsAccentLabel: "Accent Color Theme",
            settingsDangerSec: "Danger Zone",
            dangerZoneDesc: "Resetting databases deletes all messages, friendship invitations, and local account records instantly.",
            btnResetDb: "Reset Messenger Database",
            saveCloseBtn: "Save & Close",
            usernameChangeHint: "Username cannot be modified.",
            addFriendTitle: "Add Friend",
            addFriendPlaceholder: "Enter username...",
            addFriendBtn: "Send Request",
            invitationsTitle: "Friend Requests",
            noContacts: "No contacts found.",
            noInvites: "No pending requests.",
            cannotWriteChannel: "Only administrators can broadcast here.",
            systemJoined: "joined the chat.",
            systemCallOutgoing: "Outgoing call",
            systemCallIncoming: "Incoming call",
            systemCallEnded: "Call ended. Duration: ",
            systemFriendAccepted: "is now your friend.",
            validationUserEmpty: "Username cannot be empty.",
            validationUserFormat: "Only alphanumeric characters allowed (no spaces).",
            validationUserExists: "Username already exists.",
            validationPassLength: "Password must be at least 6 characters.",
            validationPassMatch: "Passwords do not match.",
            validationUserNotFound: "User not found.",
            validationWrongPass: "Incorrect password.",
            validationFriendSelf: "You cannot add yourself.",
            validationFriendAlready: "Already in your contacts.",
            validationFriendPending: "Request is already pending.",
            typingText: "is typing",
            activeOnline: "Online",
            activeAway: "Away",
            activeDnd: "Do Not Disturb",
            activeOffline: "Offline"
        },
        ru: {
            startBtn: "Начать",
            heroTitle: "Связь Нового Поколения в Стиле Glassmorphism",
            heroSubtitle: "Испытайте плавные, эстетичные и интерактивные симулированные соединения прямо в вашей безопасной среде браузера.",
            openApp: "Открыть Aether",
            whyUsTitle: "Почему Aether?",
            cardGlassTitle: "Чистый Глассморфизм",
            cardGlassDesc: "Тщательно проработанный интерфейс с использованием размытия фона, тонких градиентов и световых бликов для удовольствия ваших глаз.",
            cardStorageTitle: "Безопасное Локальное Хранилище",
            cardStorageDesc: "Никаких удаленных серверов. Ваши логины, контакты и истории переписки хранятся безопасно и конфиденциально внутри браузера.",
            cardFeaturesTitle: "Симуляция Общения",
            cardFeaturesTitleDesc: "Испытайте в реальном времени интерактивные аудиозвонки, кастомные статусы, многопользовательские группы и каналы.",
            loginTitle: "Вход в систему",
            usernameLabel: "Имя пользователя",
            passwordLabel: "Пароль",
            signInBtn: "Войти",
            noAccountText: "Нет учетной записи? ",
            signUpLink: "Создать",
            registerTitle: "Регистрация",
            confirmPasswordLabel: "Подтвердите пароль",
            signUpBtn: "Создать аккаунт",
            haveAccountText: "Уже зарегистрированы? ",
            signInLink: "Войти",
            customStatusPlaceholder: "Статус не установлен",
            searchPlaceholder: "Поиск чатов, контактов...",
            tabChats: "Чаты",
            tabGroups: "Группы",
            tabChannels: "Каналы",
            tabContacts: "Контакты",
            createBtn: "Создать Группу/Канал",
            welcomeBackTitle: "Выберите диалог",
            welcomeBackDesc: "Выберите друга, группу или подпишитесь на канал, чтобы начать общение.",
            backToChats: "К списку чатов",
            composerPlaceholder: "Напишите сообщение...",
            callConnecting: "Соединение...",
            callRinging: "Вызов...",
            callConnected: "В сети",
            callEnded: "Звонок завершен",
            callDeclined: "Звонок отклонен",
            callBusy: "Абонент занят",
            createModalTitle: "Создать Группу или Канал",
            entityTypeLabel: "Тип",
            radioGroup: "Группа (Интерактивная)",
            radioChannel: "Канал (Только чтение)",
            entityNameLabel: "Название",
            entityDescLabel: "Описание",
            cancelBtn: "Отмена",
            confirmCreateBtn: "Создать",
            settingsTitle: "Настройки и профиль",
            settingsProfileSec: "Данные профиля",
            settingsStatusLabel: "Кастомный статус",
            settingsPresenceLabel: "Сетевой статус",
            statusOnline: "В сети",
            statusAway: "Отошел",
            statusDnd: "Не беспокоить",
            settingsPrefsSec: "Предпочтения",
            settingsLangLabel: "Язык приложения",
            settingsAccentLabel: "Цветовая тема акцента",
            settingsDangerSec: "Опасная зона",
            dangerZoneDesc: "Сброс базы данных мгновенно и безвозвратно удалит все сообщения, контакты, настройки и учетные записи.",
            btnResetDb: "Сбросить базу данных мессенджера",
            saveCloseBtn: "Сохранить и закрыть",
            usernameChangeHint: "Имя пользователя не может быть изменено.",
            addFriendTitle: "Добавить друга",
            addFriendPlaceholder: "Имя пользователя...",
            addFriendBtn: "Отправить запрос",
            invitationsTitle: "Запросы в друзья",
            noContacts: "Контакты не найдены.",
            noInvites: "Нет входящих запросов.",
            cannotWriteChannel: "Только администраторы могут писать в этот канал.",
            systemJoined: "присоединился к чату.",
            systemCallOutgoing: "Исходящий звонок",
            systemCallIncoming: "Входящий звонок",
            systemCallEnded: "Звонок завершен. Длительность: ",
            systemFriendAccepted: "добавлен в друзья.",
            validationUserEmpty: "Имя пользователя не может быть пустым.",
            validationUserFormat: "Допускаются только латинские буквы и цифры.",
            validationUserExists: "Пользователь с таким именем уже существует.",
            validationPassLength: "Пароль должен быть не менее 6 символов.",
            validationPassMatch: "Пароли не совпадают.",
            validationUserNotFound: "Пользователь не найден.",
            validationWrongPass: "Неверный пароль.",
            validationFriendSelf: "Нельзя добавить самого себя.",
            validationFriendAlready: "Уже есть в ваших контактах.",
            validationFriendPending: "Запрос уже отправлен.",
            typingText: "пишет",
            activeOnline: "В сети",
            activeAway: "Отошел",
            activeDnd: "Не беспокоить",
            activeOffline: "Не в сети"
        }
    };

    let currentLanguage = "en";

    /* --------------------------------------------------------------------------
       2. DATABASE INTERACTION LAYER (LOCAL STORAGE SIMULATION)
       -------------------------------------------------------------------------- */
    const DB = {
        get(key) {
            return JSON.parse(localStorage.getItem(`aether_${key}`));
        },
        set(key, val) {
            localStorage.setItem(`aether_${key}`, JSON.stringify(val));
        },
        clear() {
            // Remove our key namespace
            const keys = Object.keys(localStorage);
            keys.forEach(k => {
                if (k.startsWith("aether_")) {
                    localStorage.removeItem(k);
                }
            });
        },
        initialize() {
            // Check if users exist. If not, setup mock data
            if (!this.get("users")) {
                const defaultUsers = {
                    "sophia": { username: "sophia", password: "password123", statusText: "AI Assistant", statusEmoji: "🤖", onlineStatus: "online", accentColor: "cyan" },
                    "liam": { username: "liam", password: "password123", statusText: "Away from keyboard", statusEmoji: "💤", onlineStatus: "away", accentColor: "purple" },
                    "emma": { username: "emma", password: "password123", statusText: "Do not disturb please", statusEmoji: "🚫", onlineStatus: "dnd", accentColor: "pink" }
                };
                this.set("users", defaultUsers);
            }

            if (!this.get("chats")) {
                const defaultChats = [
                    { id: "direct_sophia", type: "chat", name: "Sophia", description: "Your companion AI bot", members: ["sophia"], lastMsgTime: Date.now() - 1000 * 60 * 5 },
                    { id: "group_aether", type: "group", name: "Aether Developers", description: "Official workspace for discussing UI aesthetics.", members: ["sophia", "liam", "emma"], lastMsgTime: Date.now() - 1000 * 60 * 10 },
                    { id: "channel_announcements", type: "channel", name: "Aether Announcements", description: "Official broadcast channel of Aether ecosystem.", members: ["sophia", "liam", "emma"], admin: "liam", lastMsgTime: Date.now() - 1000 * 60 * 60 }
                ];
                this.set("chats", defaultChats);
            }

            if (!this.get("messages")) {
                const defaultMessages = [
                    { id: "m1", chatId: "direct_sophia", sender: "sophia", text: "Hello! I am Sophia, your automated AI guide. Message me to chat, or try calling me using the button in the header!", timestamp: Date.now() - 1000 * 60 * 5, read: true },
                    { id: "m2", chatId: "group_aether", sender: "liam", text: "I really love the glassmorphic card illumination effects on the landing page!", timestamp: Date.now() - 1000 * 60 * 12, read: true },
                    { id: "m3", chatId: "group_aether", sender: "emma", text: "Yes! The transitions are super smooth too, especially on the hover highlights.", timestamp: Date.now() - 1000 * 60 * 10, read: true },
                    { id: "m4", chatId: "group_aether", sender: "sophia", text: "Hello developers! Glad to be part of the Aether ecosystem.", timestamp: Date.now() - 1000 * 60 * 9, read: true },
                    { id: "m5", chatId: "channel_announcements", sender: "liam", text: "Welcome to Aether! This is a read-only channel for users. Only administrators can post updates here.", timestamp: Date.now() - 1000 * 60 * 60, read: true }
                ];
                this.set("messages", defaultMessages);
            }

            if (!this.get("friendRequests")) {
                this.set("friendRequests", [
                    { from: "liam", to: "active_user_placeholder", status: "accepted" },
                    { from: "emma", to: "active_user_placeholder", status: "accepted" },
                    { from: "sophia", to: "active_user_placeholder", status: "accepted" }
                ]);
            }
        }
    };

    DB.initialize();

    /* --------------------------------------------------------------------------
       3. APPLICATION STATE MANAGEMENT
       -------------------------------------------------------------------------- */
    let currentUser = DB.get("currentUser") || null; // Stores currently signed in user object
    let activeChatId = null;
    let currentTab = "chats"; // chats, groups, channels, contacts
    let callState = {
        isActive: false,
        type: null, // 'outgoing' or 'incoming'
        user: null, // target user name
        connectionTimer: null,
        durationTimer: null,
        durationSeconds: 0,
        isMuted: false
    };

    /* --------------------------------------------------------------------------
       4. INTERACTIVE HOVER CARDS (Spotlight Mouse Tracking)
       -------------------------------------------------------------------------- */
    const setupCardSpotlight = () => {
        const cards = document.querySelectorAll(".glow-card");
        cards.forEach(card => {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });
    };
    setupCardSpotlight();

    /* --------------------------------------------------------------------------
       5. LOCALIZATION CORE ENGINE
       -------------------------------------------------------------------------- */
    const localizeInterface = (lang) => {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        
        // Translate all data-i18n items
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Quick language toggles indicators update
        const quickLangBtn = document.getElementById("btn-quick-lang");
        const headerLangBtn = document.getElementById("landing-lang-toggle");
        if (quickLangBtn) quickLangBtn.textContent = lang.toUpperCase();
        if (headerLangBtn) headerLangBtn.textContent = lang === "en" ? "RU" : "EN";

        // Refresh dynamic UI elements
        if (currentUser) {
            renderSidebarList();
            renderActiveChat();
        }
    };

    // Landing Language Toggle Click
    document.getElementById("landing-lang-toggle").addEventListener("click", () => {
        const target = currentLanguage === "en" ? "ru" : "en";
        localizeInterface(target);
    });

    // Quick Sidebar Language Button
    document.getElementById("btn-quick-lang").addEventListener("click", () => {
        const target = currentLanguage === "en" ? "ru" : "en";
        localizeInterface(target);
        if (currentUser) {
            currentUser.language = target;
            saveUserSession();
        }
    });

    /* --------------------------------------------------------------------------
       6. AUTHENTICATION CONTROLLER (Forms & Local Storage User Accounts)
       -------------------------------------------------------------------------- */
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    
    // View Switch Links
    document.getElementById("link-to-register").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("login-form-container").classList.remove("active");
        setTimeout(() => {
            document.getElementById("register-form-container").classList.add("active");
        }, 150);
    });

    document.getElementById("link-to-login").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("register-form-container").classList.remove("active");
        setTimeout(() => {
            document.getElementById("login-form-container").classList.add("active");
        }, 150);
    });

    // Routing transitions
    const showSection = (sectionId) => {
        const sections = document.querySelectorAll(".view-section");
        sections.forEach(s => s.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");
    };

    // Hero buttons routing to Auth Page
    document.getElementById("btn-to-auth").addEventListener("click", () => {
        showSection("auth-page");
    });
    document.getElementById("btn-hero-start").addEventListener("click", () => {
        showSection("auth-page");
    });
    document.getElementById("auth-btn-back").addEventListener("click", () => {
        showSection("landing-page");
    });

    // Sign In Submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const usernameInput = document.getElementById("login-username");
        const passwordInput = document.getElementById("login-password");
        const userError = document.getElementById("login-user-error");
        const passError = document.getElementById("login-pass-error");

        userError.classList.remove("visible");
        passError.classList.remove("visible");

        let valid = true;
        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value;

        if (!username) {
            userError.textContent = translations[currentLanguage].validationUserEmpty;
            userError.classList.add("visible");
            valid = false;
        }

        if (!password) {
            passError.textContent = translations[currentLanguage].validationPassLength;
            passError.classList.add("visible");
            valid = false;
        }

        if (!valid) return;

        const users = DB.get("users");
        if (!users[username]) {
            userError.textContent = translations[currentLanguage].validationUserNotFound;
            userError.classList.add("visible");
            return;
        }

        if (users[username].password !== password) {
            passError.textContent = translations[currentLanguage].validationWrongPass;
            passError.classList.add("visible");
            return;
        }

        // Setup session
        currentUser = users[username];
        currentUser.onlineStatus = "online";
        users[username].onlineStatus = "online";
        DB.set("users", users);

        loginUser(currentUser);
    });

    // Sign Up Submission
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const usernameInput = document.getElementById("reg-username");
        const passwordInput = document.getElementById("reg-password");
        const confirmInput = document.getElementById("reg-confirm");
        
        const userError = document.getElementById("reg-user-error");
        const passError = document.getElementById("reg-pass-error");
        const confirmError = document.getElementById("reg-confirm-error");

        userError.classList.remove("visible");
        passError.classList.remove("visible");
        confirmError.classList.remove("visible");

        let valid = true;
        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value;
        const confirm = confirmInput.value;

        if (!username) {
            userError.textContent = translations[currentLanguage].validationUserEmpty;
            userError.classList.add("visible");
            valid = false;
        } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            userError.textContent = translations[currentLanguage].validationUserFormat;
            userError.classList.add("visible");
            valid = false;
        }

        if (password.length < 6) {
            passError.textContent = translations[currentLanguage].validationPassLength;
            passError.classList.add("visible");
            valid = false;
        }

        if (password !== confirm) {
            confirmError.textContent = translations[currentLanguage].validationPassMatch;
            confirmError.classList.add("visible");
            valid = false;
        }

        if (!valid) return;

        const users = DB.get("users");
        if (users[username]) {
            userError.textContent = translations[currentLanguage].validationUserExists;
            userError.classList.add("visible");
            return;
        }

        // Register new user
        const newUser = {
            username: username,
            password: password,
            statusText: "",
            statusEmoji: "",
            onlineStatus: "online",
            accentColor: "cyan",
            language: currentLanguage
        };

        users[username] = newUser;
        DB.set("users", users);

        // Auto accept request simulation
        const invites = DB.get("friendRequests");
        invites.push({ from: "sophia", to: username, status: "accepted" });
        invites.push({ from: "liam", to: username, status: "accepted" });
        invites.push({ from: "emma", to: username, status: "accepted" });
        DB.set("friendRequests", invites);

        // Adjust defaults
        currentUser = newUser;
        loginUser(currentUser);
    });

    const loginUser = (user) => {
        DB.set("currentUser", user);
        
        // Update styling theme to user setting
        setAccentTheme(user.accentColor || "cyan");
        localizeInterface(user.language || currentLanguage);

        // UI rendering updates
        document.getElementById("my-username").textContent = user.username;
        document.getElementById("my-avatar").textContent = user.username.charAt(0);
        updateProfileIndicator(user.onlineStatus);

        // Custom status indicator
        updateStatusDisplay(user.statusEmoji, user.statusText);

        // Load dashboard
        showSection("messenger-page");
        
        // Load settings panel values
        document.getElementById("settings-nickname").value = user.username;
        document.getElementById("settings-status-emoji").value = user.statusEmoji || "";
        document.getElementById("settings-status-text").value = user.statusText || "";
        document.getElementById("settings-online-status").value = user.onlineStatus || "online";
        document.getElementById("settings-lang").value = user.language || currentLanguage;

        // Reset list displays
        activeChatId = null;
        document.getElementById("chat-active-state").style.display = "none";
        document.getElementById("chat-empty-state").classList.add("active");
        renderSidebarList();
    };

    // Logout operation
    document.getElementById("btn-logout").addEventListener("click", () => {
        if (!currentUser) return;

        const users = DB.get("users");
        if (users[currentUser.username]) {
            users[currentUser.username].onlineStatus = "offline";
            DB.set("users", users);
        }

        currentUser = null;
        localStorage.removeItem("aether_currentUser");
        showSection("landing-page");
    });

    // Check existing session on boot
    if (currentUser) {
        // Double check online state
        const users = DB.get("users");
        if (users[currentUser.username]) {
            users[currentUser.username].onlineStatus = "online";
            DB.set("users", users);
            currentUser.onlineStatus = "online";
        }
        loginUser(currentUser);
    } else {
        localizeInterface("en");
    }

    /* --------------------------------------------------------------------------
       7. THEMES & COLOR PICKERS
       -------------------------------------------------------------------------- */
    const setAccentTheme = (themeName) => {
        document.body.className = `theme-${themeName}`;
        document.querySelectorAll(".color-dot").forEach(dot => {
            dot.classList.remove("active");
            if (dot.getAttribute("data-color") === themeName) {
                dot.classList.add("active");
            }
        });
    };

    document.querySelectorAll(".color-dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            const theme = e.target.getAttribute("data-color");
            setAccentTheme(theme);
            if (currentUser) {
                currentUser.accentColor = theme;
                saveUserSession();
            }
        });
    });

    const saveUserSession = () => {
        if (!currentUser) return;
        DB.set("currentUser", currentUser);
        const users = DB.get("users");
        if (users[currentUser.username]) {
            users[currentUser.username] = currentUser;
            DB.set("users", users);
        }
    };

    /* --------------------------------------------------------------------------
       8. PROFILE SETTINGS DIALOG
       -------------------------------------------------------------------------- */
    const profileTrigger = document.getElementById("user-profile-trigger");
    const settingsBtn = document.getElementById("btn-settings");
    const settingsModal = document.getElementById("settings-modal");
    const settingsClose = document.getElementById("btn-settings-close");

    profileTrigger.addEventListener("click", () => settingsModal.classList.add("active"));
    settingsBtn.addEventListener("click", () => settingsModal.classList.add("active"));

    settingsClose.addEventListener("click", () => {
        if (!currentUser) return;

        const emojiVal = document.getElementById("settings-status-emoji").value.trim();
        const textVal = document.getElementById("settings-status-text").value.trim();
        const onlineVal = document.getElementById("settings-online-status").value;
        const langVal = document.getElementById("settings-lang").value;

        currentUser.statusEmoji = emojiVal;
        currentUser.statusText = textVal;
        currentUser.onlineStatus = onlineVal;
        currentUser.language = langVal;

        saveUserSession();
        localizeInterface(langVal);

        updateProfileIndicator(onlineVal);
        updateStatusDisplay(emojiVal, textVal);

        settingsModal.classList.remove("active");
    });

    const updateProfileIndicator = (status) => {
        const badge = document.getElementById("my-online-badge");
        badge.className = `status-badge ${status}`;
    };

    const updateStatusDisplay = (emoji, text) => {
        const preview = document.getElementById("my-custom-status-preview");
        if (!emoji && !text) {
            preview.querySelector(".emoji").textContent = "✨";
            preview.querySelector(".text").textContent = translations[currentLanguage].customStatusPlaceholder;
            preview.querySelector(".text").setAttribute("data-i18n", "customStatusPlaceholder");
        } else {
            preview.querySelector(".emoji").textContent = emoji || "";
            preview.querySelector(".text").textContent = text || "";
            preview.querySelector(".text").removeAttribute("data-i18n");
        }
    };

    // Danger Reset Data Function
    document.getElementById("btn-reset-db").addEventListener("click", () => {
        if (confirm("Are you sure you want to completely format all local databases? You will be logged out.")) {
            DB.clear();
            window.location.reload();
        }
    });

    /* --------------------------------------------------------------------------
       9. SIDEBAR SEARCH & NAVIGATION (TAB CHANGING)
       -------------------------------------------------------------------------- */
    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(tab => {
        tab.addEventListener("click", () => {
            tabItems.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentTab = tab.getAttribute("data-tab");
            
            // Adjust footer create button labels based on selections
            const createBtnLabel = document.getElementById("label-create-entity");
            if (currentTab === "channels") {
                createBtnLabel.textContent = translations[currentLanguage].radioChannel.split(" ")[0]; // Just Channel
            } else {
                createBtnLabel.textContent = translations[currentLanguage].createBtn;
                createBtnLabel.setAttribute("data-i18n", "createBtn");
            }

            renderSidebarList();
        });
    });

    // Realtime search text updates
    document.getElementById("search-input").addEventListener("input", () => {
        renderSidebarList();
    });

    /* --------------------------------------------------------------------------
       10. LIST DRAWING CONTROLLER (CHATS, GROUPS, CHANNELS, CONTACTS)
       -------------------------------------------------------------------------- */
    const renderSidebarList = () => {
        const viewport = document.getElementById("sidebar-list");
        const query = document.getElementById("search-input").value.trim().toLowerCase();
        
        viewport.innerHTML = "";
        
        if (!currentUser) return;

        const users = DB.get("users");
        const chats = DB.get("chats");
        const messages = DB.get("messages");
        const friendRequests = DB.get("friendRequests");

        // Filter and update notification badges
        updateNotificationBadges(messages, friendRequests);

        if (currentTab === "chats" || currentTab === "groups" || currentTab === "channels") {
            
            // Filter elements according to current tab classification
            let activeItems = chats.filter(c => {
                if (currentTab === "chats" && c.type !== "chat") return false;
                if (currentTab === "groups" && c.type !== "group") return false;
                if (currentTab === "channels" && c.type !== "channel") return false;
                
                // Exclude personal chats that are not with this user unless they have messages
                if (c.type === "chat" && c.id.startsWith("direct_")) {
                    const peer = c.id.replace("direct_", "");
                    if (peer !== "sophia") {
                        const hasMessages = messages.some(m => m.chatId === c.id);
                        if (!hasMessages) return false;
                    }
                }
                return true;
            });

            // Filter by search query
            if (query) {
                activeItems = activeItems.filter(c => {
                    let chatName = c.name;
                    if (c.type === "chat" && c.id.startsWith("direct_")) {
                        const peerName = c.id.replace("direct_", "");
                        chatName = users[peerName] ? peerName : c.name;
                    }
                    return chatName.toLowerCase().includes(query);
                });
            }

            // Order items by latest message activity timestamp
            activeItems.sort((a, b) => (b.lastMsgTime || 0) - (a.lastMsgTime || 0));

            if (activeItems.length === 0) {
                viewport.innerHTML = `<div class="msg-system" data-i18n="noContacts">${translations[currentLanguage].noContacts}</div>`;
                return;
            }

            activeItems.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.className = `list-item ${activeChatId === item.id ? "selected" : ""}`;
                itemDiv.setAttribute("data-id", item.id);

                // Fetch details of last message
                const threadMsgs = messages.filter(m => m.chatId === item.id);
                const lastMsg = threadMsgs[threadMsgs.length - 1];
                let displayMsgText = "";
                let displayTime = "";
                
                if (lastMsg) {
                    displayMsgText = lastMsg.text;
                    const date = new Date(lastMsg.timestamp);
                    displayTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                }

                let chatName = item.name;
                let avatarSymbol = item.name.charAt(0);
                let badgeClass = "";
                let presenceStatus = "";

                if (item.type === "chat" && item.id.startsWith("direct_")) {
                    const peer = item.id.replace("direct_", "");
                    const peerUser = users[peer];
                    if (peerUser) {
                        chatName = peerUser.username;
                        avatarSymbol = peerUser.username.charAt(0);
                        presenceStatus = peerUser.onlineStatus || "offline";
                        badgeClass = `status-badge ${presenceStatus}`;
                    }
                }

                // Check unread count
                const unreadCount = threadMsgs.filter(m => !m.read && m.sender !== currentUser.username).length;

                itemDiv.innerHTML = `
                    <div class="avatar-container">
                        <div class="list-item-avatar">${avatarSymbol}</div>
                        ${badgeClass ? `<div class="${badgeClass}"></div>` : ''}
                    </div>
                    <div class="list-item-body">
                        <div class="list-item-header">
                            <span class="list-item-name">${chatName}</span>
                            <span class="list-item-time">${displayTime}</span>
                        </div>
                        <div class="list-item-footer">
                            <span class="list-item-subtitle">${displayMsgText}</span>
                            ${unreadCount > 0 ? `<span class="badge">${unreadCount}</span>` : ''}
                        </div>
                    </div>
                `;

                itemDiv.addEventListener("click", () => {
                    selectConversation(item.id);
                });

                viewport.appendChild(itemDiv);
            });

        } else if (currentTab === "contacts") {
            // RENDERING CONTACTS TAB
            
            // Add Friend Box
            const addFriendDiv = document.createElement("div");
            addFriendDiv.className = "add-friend-wrapper";
            addFriendDiv.innerHTML = `
                <form class="add-friend-form" id="add-friend-form">
                    <input type="text" id="friend-username-input" placeholder="${translations[currentLanguage].addFriendPlaceholder}" autocomplete="off">
                    <button type="submit" class="btn btn-primary btn-sm" data-i18n="addFriendBtn">${translations[currentLanguage].addFriendBtn}</button>
                </form>
                <div class="validation-message" id="add-friend-error"></div>
            `;
            viewport.appendChild(addFriendDiv);

            // Bind request sender
            document.getElementById("add-friend-form").addEventListener("submit", handleAddFriend);

            // List Incoming Friend Invitations
            const incomingRequests = friendRequests.filter(r => r.to === currentUser.username && r.status === "pending");
            if (incomingRequests.length > 0) {
                const header = document.createElement("div");
                header.className = "friend-requests-header";
                header.textContent = translations[currentLanguage].invitationsTitle;
                viewport.appendChild(header);

                incomingRequests.forEach(req => {
                    const reqItem = document.createElement("div");
                    reqItem.className = "list-item";
                    reqItem.innerHTML = `
                        <div class="list-item-avatar">${req.from.charAt(0)}</div>
                        <div class="list-item-body">
                            <div class="list-item-name">${req.from}</div>
                            <div class="contact-item-status-text">Pending Invitation</div>
                        </div>
                        <div class="req-actions">
                            <button class="btn-req btn-req-accept" data-from="${req.from}">Accept</button>
                            <button class="btn-req btn-req-decline" data-from="${req.from}">Decline</button>
                        </div>
                    `;

                    // Listeners for accepting/declining requests
                    reqItem.querySelector(".btn-req-accept").addEventListener("click", (e) => {
                        e.stopPropagation();
                        acceptFriendRequest(req.from, reqItem);
                    });
                    reqItem.querySelector(".btn-req-decline").addEventListener("click", (e) => {
                        e.stopPropagation();
                        declineFriendRequest(req.from, reqItem);
                    });

                    viewport.appendChild(reqItem);
                });
            }

            // List Established Friends
            const friends = friendRequests.filter(r => 
                (r.from === currentUser.username || r.to === currentUser.username) && r.status === "accepted"
            ).map(r => r.from === currentUser.username ? r.to : r.from);

            let displayFriends = friends.filter(name => users[name] !== undefined);
            if (query) {
                displayFriends = displayFriends.filter(name => name.toLowerCase().includes(query));
            }

            if (displayFriends.length === 0 && incomingRequests.length === 0) {
                const noFriendsDiv = document.createElement("div");
                noFriendsDiv.className = "msg-system";
                noFriendsDiv.style.marginTop = "20px";
                noFriendsDiv.textContent = translations[currentLanguage].noContacts;
                viewport.appendChild(noFriendsDiv);
                return;
            }

            displayFriends.forEach(friendName => {
                const friendUser = users[friendName];
                if (!friendUser) return;

                const friendItem = document.createElement("div");
                friendItem.className = "list-item";
                
                const presence = friendUser.onlineStatus || "offline";
                const customStatus = friendUser.statusText ? `${friendUser.statusEmoji} ${friendUser.statusText}` : "";

                friendItem.innerHTML = `
                    <div class="avatar-container">
                        <div class="list-item-avatar">${friendName.charAt(0)}</div>
                        <div class="status-badge ${presence}"></div>
                    </div>
                    <div class="list-item-body">
                        <div class="list-item-name">${friendName}</div>
                        <div class="contact-item-status-text">${customStatus || translations[currentLanguage][`active${presence.charAt(0).toUpperCase() + presence.slice(1)}`]}</div>
                    </div>
                `;

                // Open direct message window when clicking contacts items
                friendItem.addEventListener("click", () => {
                    const chatId = `direct_${friendName}`;
                    
                    // Create direct chat metadata if not exists
                    const chats = DB.get("chats");
                    if (!chats.some(c => c.id === chatId)) {
                        chats.push({
                            id: chatId,
                            type: "chat",
                            name: friendName,
                            description: `Direct message thread with ${friendName}`,
                            members: [friendName],
                            lastMsgTime: Date.now()
                        });
                        DB.set("chats", chats);
                    }
                    
                    // Go to chats tab and highlight selection
                    currentTab = "chats";
                    tabItems.forEach(t => {
                        t.classList.remove("active");
                        if (t.getAttribute("data-tab") === "chats") t.classList.add("active");
                    });
                    
                    selectConversation(chatId);
                });

                viewport.appendChild(friendItem);
            });
        }
    };

    // Calculate dynamic alerts counters
    const updateNotificationBadges = (messages, friendRequests) => {
        if (!currentUser) return;

        // Unread chats count
        const unreadChatsCount = DB.get("chats").reduce((total, chat) => {
            const threadMsgs = messages.filter(m => m.chatId === chat.id);
            const count = threadMsgs.filter(m => !m.read && m.sender !== currentUser.username).length;
            return count > 0 ? total + 1 : total;
        }, 0);

        const chatsBadge = document.getElementById("badge-chats");
        if (unreadChatsCount > 0) {
            chatsBadge.textContent = unreadChatsCount;
            chatsBadge.style.display = "block";
        } else {
            chatsBadge.style.display = "none";
        }

        // Pending friend invitations count
        const pendingInvites = friendRequests.filter(r => r.to === currentUser.username && r.status === "pending").length;
        const requestsBadge = document.getElementById("badge-requests");
        if (pendingInvites > 0) {
            requestsBadge.textContent = pendingInvites;
            requestsBadge.style.display = "block";
        } else {
            requestsBadge.style.display = "none";
        }
    };

    /* --------------------------------------------------------------------------
       11. CONVERSATION VIEWPORT ENGINE (MESSAGES INJECTOR & COMPOSER)
       -------------------------------------------------------------------------- */
    const selectConversation = (chatId) => {
        activeChatId = chatId;
        
        // Slide shifting layout toggling on mobile views
        document.body.className = "show-chat";
        setAccentTheme(currentUser.accentColor || "cyan");

        // Mark messages of the chat as read
        const messages = DB.get("messages");
        messages.forEach(m => {
            if (m.chatId === chatId && m.sender !== currentUser.username) {
                m.read = true;
            }
        });
        DB.set("messages", messages);

        // UI rendering states update
        document.getElementById("chat-empty-state").classList.remove("active");
        document.getElementById("chat-active-state").style.display = "flex";

        renderSidebarList(); // Update unread badges
        renderActiveChat();
    };

    // Rendering dynamic chat headers & messaging
    const renderActiveChat = () => {
        if (!activeChatId || !currentUser) return;

        const users = DB.get("users");
        const chats = DB.get("chats");
        const messages = DB.get("messages");

        const chat = chats.find(c => c.id === activeChatId);
        if (!chat) return;

        let chatTitle = chat.name;
        let chatSubtitle = chat.description || "";
        let chatAvatar = chat.name.charAt(0);
        let presenceClass = "";
        let hideCallBtn = false;

        if (chat.type === "chat" && chat.id.startsWith("direct_")) {
            const peer = chat.id.replace("direct_", "");
            const peerUser = users[peer];
            if (peerUser) {
                chatTitle = peerUser.username;
                chatAvatar = peerUser.username.charAt(0);
                
                const presence = peerUser.onlineStatus || "offline";
                const customStatus = peerUser.statusText ? `${peerUser.statusEmoji} ${peerUser.statusText}` : "";
                chatSubtitle = customStatus || translations[currentLanguage][`active${presence.charAt(0).toUpperCase() + presence.slice(1)}`];
                presenceClass = presence;
            }
        } else {
            // Groups and channels hide audio call options
            hideCallBtn = true;
            chatSubtitle = `${chat.members.length + 1} members | ${chatSubtitle}`;
        }

        // Header info updates
        document.getElementById("active-chat-title").textContent = chatTitle;
        document.getElementById("active-chat-status").textContent = chatSubtitle;
        document.getElementById("active-chat-avatar").textContent = chatAvatar;
        
        const badge = document.getElementById("active-chat-status-badge");
        if (presenceClass) {
            badge.className = `status-badge ${presenceClass}`;
            badge.style.display = "block";
        } else {
            badge.style.display = "none";
        }

        const callBtn = document.getElementById("btn-audio-call");
        callBtn.style.display = hideCallBtn ? "none" : "flex";

        // Broadcaster vs Subscriber constraints for channels
        const inputField = document.getElementById("message-input");
        const composerForm = document.getElementById("message-form");
        const composerPanel = document.getElementById("chat-composer-panel");
        const emojiBtn = document.getElementById("btn-emoji-picker");

        if (chat.type === "channel" && chat.admin !== currentUser.username) {
            inputField.disabled = true;
            inputField.placeholder = translations[currentLanguage].cannotWriteChannel;
            inputField.removeAttribute("data-i18n");
            composerPanel.style.opacity = "0.6";
            emojiBtn.style.pointerEvents = "none";
        } else {
            inputField.disabled = false;
            inputField.placeholder = translations[currentLanguage].composerPlaceholder;
            inputField.setAttribute("data-i18n", "composerPlaceholder");
            composerPanel.style.opacity = "1";
            emojiBtn.style.pointerEvents = "all";
        }

        // Render messages array
        const container = document.getElementById("messages-container");
        container.innerHTML = "";

        const threadMsgs = messages.filter(m => m.chatId === activeChatId);
        
        if (threadMsgs.length === 0) {
            // Empty messages tip
            container.innerHTML = `<div class="msg-system" data-i18n="composerPlaceholder">Start the conversation...</div>`;
        } else {
            threadMsgs.forEach(m => {
                const wrapper = document.createElement("div");
                
                if (m.sender === "system") {
                    wrapper.className = "msg-system";
                    wrapper.textContent = m.text;
                } else {
                    const isMe = m.sender === currentUser.username;
                    wrapper.className = `msg-wrapper ${isMe ? "sent" : "received"}`;

                    const date = new Date(m.timestamp);
                    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                    // Sender name for groups/channels
                    const showSenderName = !isMe && (chat.type === "group" || chat.type === "channel");

                    wrapper.innerHTML = `
                        ${showSenderName ? `<span class="msg-sender-name">${m.sender}</span>` : ''}
                        <div class="msg-bubble">
                            ${m.text}
                        </div>
                        <div class="msg-info">
                            <span>${timeStr}</span>
                            ${isMe ? `<span class="msg-ticks">✓✓</span>` : ''}
                        </div>
                    `;
                }
                container.appendChild(wrapper);
            });
        }

        // Scroll to the bottom of the message feed smoothly
        container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth"
        });
    };

    // Mobile routing: Back to Sidebar button in chat header
    document.getElementById("btn-back-to-sidebar").addEventListener("click", () => {
        document.body.className = "show-sidebar";
        activeChatId = null;
        renderSidebarList();
    });

    document.getElementById("mobile-show-sidebar").addEventListener("click", () => {
        document.body.className = "show-sidebar";
    });

    /* --------------------------------------------------------------------------
       12. COMPOSE AND SEND MESSAGE OPERATION & AUTO RESPONSE BOT SIMULATION
       -------------------------------------------------------------------------- */
    const messageForm = document.getElementById("message-form");
    
    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const input = document.getElementById("message-input");
        const text = input.value.trim();
        if (!text || !activeChatId) return;

        const messages = DB.get("messages");
        const newMessage = {
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            chatId: activeChatId,
            sender: currentUser.username,
            text: text,
            timestamp: Date.now(),
            read: false
        };

        messages.push(newMessage);
        DB.set("messages", messages);

        // Update active time for sorting
        const chats = DB.get("chats");
        const activeChat = chats.find(c => c.id === activeChatId);
        if (activeChat) {
            activeChat.lastMsgTime = Date.now();
            DB.set("chats", chats);
        }

        input.value = "";
        renderActiveChat();
        renderSidebarList();

        // Trigger bot auto-replies if the active room is direct with Sophia or includes Sophia in Group
        if (activeChatId === "direct_sophia" || (activeChat && activeChat.type === "group" && activeChat.members.includes("sophia"))) {
            simulateSophiaAutoResponse(text);
        }
    });

    // Sophia (AI Bot) responses logic
    const simulateSophiaAutoResponse = (userText) => {
        const typingIndicator = document.getElementById("typing-indicator");
        
        // Show typing indicator after a brief delay
        setTimeout(() => {
            const isGroup = activeChatId.startsWith("group_");
            typingIndicator.querySelector(".typing-text").textContent = `Sophia ${translations[currentLanguage].typingText}`;
            typingIndicator.classList.add("active");

            // Scroll container
            const container = document.getElementById("messages-container");
            container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

            setTimeout(() => {
                typingIndicator.classList.remove("active");
                
                const messages = DB.get("messages");
                let replyText = "";

                // Analyze prompt key words for localized replies
                const textLower = userText.toLowerCase();
                
                if (currentLanguage === "ru") {
                    if (textLower.includes("привет") || textLower.includes("здравствуй")) {
                        replyText = "Привет! Чем я могу помочь тебе сегодня в мессенджере Aether?";
                    } else if (textLower.includes("звон") || textLower.includes("набер")) {
                        replyText = "Ты можешь запустить аудиозвонок со мной в шапке чата! Попробуй прямо сейчас.";
                    } else if (textLower.includes("настройк") || textLower.includes("язык") || textLower.includes("тем")) {
                        replyText = "Вы можете переключать темы оформления и языки интерфейса в меню настроек профиля (значок шестеренки в боковой панели).";
                    } else if (textLower.includes("друг") || textLower.includes("контакт")) {
                        replyText = "Во вкладке контактов вы можете просматривать запросы на дружбу или добавить нового друга по его логину.";
                    } else {
                        replyText = "Интересная мысль! Я симуляционный бот, созданный для проверки интерфейса Aether. Попробуй также создать групповой чат или канал!";
                    }
                } else {
                    if (textLower.includes("hello") || textLower.includes("hi")) {
                        replyText = "Hello there! How can I help you today in the Aether Messenger?";
                    } else if (textLower.includes("call") || textLower.includes("phone")) {
                        replyText = "You can initiate a simulated audio call with me from the header actions! Give it a try.";
                    } else if (textLower.includes("settings") || textLower.includes("language") || textLower.includes("theme")) {
                        replyText = "You can change settings, languages, and themes in the profile menu (gear icon in the sidebar).";
                    } else if (textLower.includes("friend") || textLower.includes("contact")) {
                        replyText = "In the contacts tab you can add new users by username or accept friendship invitations.";
                    } else {
                        replyText = "That sounds interesting! I am a simulated bot designed to demonstrate the Aether UI. Try creating a group or channel too!";
                    }
                }

                const botMessage = {
                    id: `msg_${Date.now()}`,
                    chatId: activeChatId,
                    sender: "sophia",
                    text: replyText,
                    timestamp: Date.now(),
                    read: activeChatId === "direct_sophia" // Auto read if active direct
                };

                messages.push(botMessage);
                DB.set("messages", messages);

                // Update active chat timestamp
                const chats = DB.get("chats");
                const activeChat = chats.find(c => c.id === activeChatId);
                if (activeChat) {
                    activeChat.lastMsgTime = Date.now();
                    DB.set("chats", chats);
                }

                renderActiveChat();
                renderSidebarList();

            }, 1500); // Response generation latency simulation

        }, 800);
    };

    /* --------------------------------------------------------------------------
       13. EMOJI DRAWER CONTROL
       -------------------------------------------------------------------------- */
    const emojiBtn = document.getElementById("btn-emoji-picker");
    const emojiDrawer = document.getElementById("emoji-drawer");

    emojiBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        emojiDrawer.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!emojiDrawer.contains(e.target) && e.target !== emojiBtn) {
            emojiDrawer.classList.remove("active");
        }
    });

    document.querySelectorAll(".emoji-item").forEach(item => {
        item.addEventListener("click", () => {
            const input = document.getElementById("message-input");
            input.value += item.textContent;
            emojiDrawer.classList.remove("active");
            input.focus();
        });
    });

    /* --------------------------------------------------------------------------
       14. FRIEND REQUEST HANDLERS (ADD / ACCEPT / DECLINE)
       -------------------------------------------------------------------------- */
    const handleAddFriend = (e) => {
        e.preventDefault();
        
        const input = document.getElementById("friend-username-input");
        const errorDiv = document.getElementById("add-friend-error");
        
        errorDiv.classList.remove("visible");

        const friendName = input.value.trim().toLowerCase();
        if (!friendName) {
            errorDiv.textContent = translations[currentLanguage].validationUserEmpty;
            errorDiv.classList.add("visible");
            return;
        }

        if (friendName === currentUser.username) {
            errorDiv.textContent = translations[currentLanguage].validationFriendSelf;
            errorDiv.classList.add("visible");
            return;
        }

        const users = DB.get("users");
        if (!users[friendName]) {
            errorDiv.textContent = translations[currentLanguage].validationUserNotFound;
            errorDiv.classList.add("visible");
            return;
        }

        const requests = DB.get("friendRequests");
        
        // Check if already friends
        const alreadyFriends = requests.some(r => 
            r.status === "accepted" && 
            ((r.from === currentUser.username && r.to === friendName) || (r.from === friendName && r.to === currentUser.username))
        );

        if (alreadyFriends) {
            errorDiv.textContent = translations[currentLanguage].validationFriendAlready;
            errorDiv.classList.add("visible");
            return;
        }

        // Check if pending request exists
        const pendingRequest = requests.some(r => 
            r.status === "pending" && 
            ((r.from === currentUser.username && r.to === friendName) || (r.from === friendName && r.to === currentUser.username))
        );

        if (pendingRequest) {
            errorDiv.textContent = translations[currentLanguage].validationFriendPending;
            errorDiv.classList.add("visible");
            return;
        }

        // Send new friend invite request
        requests.push({
            from: currentUser.username,
            to: friendName,
            status: "pending"
        });

        DB.set("friendRequests", requests);
        
        input.value = "";
        renderSidebarList();

        // Simulated auto-accept trigger for Emma or Liam after 3 seconds for demonstration
        if (friendName === "emma" || friendName === "liam") {
            setTimeout(() => {
                const requestsLatest = DB.get("friendRequests");
                const req = requestsLatest.find(r => r.from === currentUser.username && r.to === friendName && r.status === "pending");
                if (req) {
                    req.status = "accepted";
                    DB.set("friendRequests", requestsLatest);
                    
                    // Create direct chat profile
                    const chats = DB.get("chats");
                    const chatId = `direct_${friendName}`;
                    if (!chats.some(c => c.id === chatId)) {
                        chats.push({
                            id: chatId,
                            type: "chat",
                            name: friendName,
                            description: `Direct message thread with ${friendName}`,
                            members: [friendName],
                            lastMsgTime: Date.now()
                        });
                        DB.set("chats", chats);
                    }

                    // Push system message logs
                    const messages = DB.get("messages");
                    messages.push({
                        id: `system_${Date.now()}`,
                        chatId: chatId,
                        sender: "system",
                        text: `${friendName} ${translations[currentLanguage].systemFriendAccepted}`,
                        timestamp: Date.now(),
                        read: false
                    });
                    DB.set("messages", messages);

                    if (currentTab === "contacts") {
                        renderSidebarList();
                    }
                }
            }, 3000);
        }
    };

    const acceptFriendRequest = (fromUser, elementNode) => {
        // Drop elements smooth fade transitions before redraw
        elementNode.style.transform = "scale(0.9) translateX(-30px)";
        elementNode.style.opacity = "0";

        setTimeout(() => {
            const requests = DB.get("friendRequests");
            const req = requests.find(r => r.from === fromUser && r.to === currentUser.username && r.status === "pending");
            if (req) {
                req.status = "accepted";
                DB.set("friendRequests", requests);

                // Initialize direct conversation record
                const chats = DB.get("chats");
                const chatId = `direct_${fromUser}`;
                if (!chats.some(c => c.id === chatId)) {
                    chats.push({
                        id: chatId,
                        type: "chat",
                        name: fromUser,
                        description: `Direct message thread with ${fromUser}`,
                        members: [fromUser],
                        lastMsgTime: Date.now()
                    });
                    DB.set("chats", chats);
                }

                // Add system confirmation message
                const messages = DB.get("messages");
                messages.push({
                    id: `sys_${Date.now()}`,
                    chatId: chatId,
                    sender: "system",
                    text: `${fromUser} ${translations[currentLanguage].systemFriendAccepted}`,
                    timestamp: Date.now(),
                    read: false
                });
                DB.set("messages", messages);
            }
            renderSidebarList();
        }, 300);
    };

    const declineFriendRequest = (fromUser, elementNode) => {
        elementNode.style.transform = "scale(0.9) translateX(30px)";
        elementNode.style.opacity = "0";

        setTimeout(() => {
            const requests = DB.get("friendRequests");
            const filtered = requests.filter(r => !(r.from === fromUser && r.to === currentUser.username && r.status === "pending"));
            DB.set("friendRequests", filtered);
            renderSidebarList();
        }, 300);
    };

    /* --------------------------------------------------------------------------
       15. GROUP / CHANNEL CREATION WINDOW MODAL
       -------------------------------------------------------------------------- */
    const createBtn = document.getElementById("btn-create-entity");
    const createModal = document.getElementById("create-modal");
    const createCancel = document.getElementById("btn-create-cancel");
    const createForm = document.getElementById("create-entity-form");

    createBtn.addEventListener("click", () => {
        createModal.classList.add("active");
        
        // Auto select type radio corresponding to tab
        if (currentTab === "channels") {
            createModal.querySelectorAll('input[name="entity-type"]').forEach(radio => {
                if (radio.value === "channel") radio.checked = true;
            });
        } else {
            createModal.querySelectorAll('input[name="entity-type"]').forEach(radio => {
                if (radio.value === "group") radio.checked = true;
            });
        }
    });

    createCancel.addEventListener("click", () => {
        createModal.classList.remove("active");
        createForm.reset();
        document.getElementById("create-name-error").classList.remove("visible");
    });

    createForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const type = createForm.querySelector('input[name="entity-type"]:checked').value;
        const nameInput = document.getElementById("entity-name");
        const descInput = document.getElementById("entity-desc");
        const errorDiv = document.getElementById("create-name-error");

        errorDiv.classList.remove("visible");

        const name = nameInput.value.trim();
        if (!name) {
            errorDiv.textContent = translations[currentLanguage].validationUserEmpty;
            errorDiv.classList.add("visible");
            return;
        }

        const chats = DB.get("chats");
        const cleanId = `${type}_${Date.now()}`;

        // Register new conversation entity
        const newEntity = {
            id: cleanId,
            type: type,
            name: name,
            description: descInput.value.trim() || `Welcome to the ${type} ${name}!`,
            members: ["sophia", "liam", "emma"], // Pre-populate mock participants
            admin: type === "channel" ? currentUser.username : null, // Creator is admin of channel
            lastMsgTime: Date.now()
        };

        chats.push(newEntity);
        DB.set("chats", chats);

        // Add initialization message
        const messages = DB.get("messages");
        messages.push({
            id: `init_${Date.now()}`,
            chatId: cleanId,
            sender: "system",
            text: `${currentUser.username} created this ${type}.`,
            timestamp: Date.now(),
            read: true
        });
        DB.set("messages", messages);

        // UI Updates
        createModal.classList.remove("active");
        createForm.reset();

        // Switch to matching tab
        currentTab = type === "channel" ? "channels" : "groups";
        tabItems.forEach(t => {
            t.classList.remove("active");
            if (t.getAttribute("data-tab") === currentTab) t.classList.add("active");
        });

        selectConversation(cleanId);
    });

    /* --------------------------------------------------------------------------
       16. VOICE CALL SIMULATION ENGINE (LATENCY & WAVE PIPELINES)
       -------------------------------------------------------------------------- */
    const callOverlay = document.getElementById("call-overlay");
    const audioCallBtn = document.getElementById("btn-audio-call");
    const acceptCallBtn = document.getElementById("btn-call-accept");
    const declineCallBtn = document.getElementById("btn-call-decline");
    const muteCallBtn = document.getElementById("btn-call-mute");

    audioCallBtn.addEventListener("click", () => {
        if (!activeChatId) return;

        const peer = activeChatId.replace("direct_", "");
        initiateAudioCall(peer);
    });

    const initiateAudioCall = (peerUsername) => {
        const users = DB.get("users");
        const peer = users[peerUsername] || { username: peerUsername, onlineStatus: "offline" };

        callState.isActive = true;
        callState.type = "outgoing";
        callState.user = peer.username;
        callState.isMuted = false;
        callState.durationSeconds = 0;

        // Render Call UI elements
        document.getElementById("call-user-avatar").textContent = peer.username.charAt(0).toUpperCase();
        document.getElementById("call-user-name").textContent = peer.username;
        document.getElementById("call-connection-state").textContent = translations[currentLanguage].callConnecting;
        document.getElementById("call-connection-state").setAttribute("data-i18n", "callConnecting");
        document.getElementById("call-timer").style.display = "none";
        
        acceptCallBtn.classList.remove("visible"); // Hide accept button for outgoing call
        
        // Style controls resetting
        muteCallBtn.classList.remove("muted");
        document.getElementById("mic-on-icon").style.display = "block";
        document.getElementById("mic-off-icon").style.display = "none";

        // Display Call Modal
        callOverlay.classList.add("active");
        const rippleWrapper = document.querySelector(".call-ripple-wrapper");
        rippleWrapper.classList.add("ringing");

        // Logic branching depending on online presence
        if (peer.onlineStatus === "dnd") {
            // Decline immediately
            clearTimeout(callState.connectionTimer);
            callState.connectionTimer = setTimeout(() => {
                terminateCallSimulation(translations[currentLanguage].callBusy);
            }, 2000);
        } else if (peer.onlineStatus === "away" || peer.onlineStatus === "offline") {
            // Ring for 4 seconds then fail
            clearTimeout(callState.connectionTimer);
            callState.connectionTimer = setTimeout(() => {
                document.getElementById("call-connection-state").textContent = translations[currentLanguage].callRinging;
                document.getElementById("call-connection-state").setAttribute("data-i18n", "callRinging");
                
                callState.connectionTimer = setTimeout(() => {
                    terminateCallSimulation(translations[currentLanguage].callDeclined);
                }, 4000);
            }, 1500);
        } else {
            // Ring 2 seconds and connect (Sophia bot accepts!)
            clearTimeout(callState.connectionTimer);
            callState.connectionTimer = setTimeout(() => {
                document.getElementById("call-connection-state").textContent = translations[currentLanguage].callRinging;
                document.getElementById("call-connection-state").setAttribute("data-i18n", "callRinging");

                callState.connectionTimer = setTimeout(() => {
                    connectCallSimulation();
                }, 2500);
            }, 1200);
        }
    };

    const connectCallSimulation = () => {
        clearTimeout(callState.connectionTimer);
        document.getElementById("call-connection-state").textContent = translations[currentLanguage].callConnected;
        document.getElementById("call-connection-state").setAttribute("data-i18n", "callConnected");
        
        // Show timer
        const timerDiv = document.getElementById("call-timer");
        timerDiv.textContent = "00:00";
        timerDiv.style.display = "block";

        // Remove ripple wave rings during active speaking to save CPU/battery, or keep slow pulse
        const rippleWrapper = document.querySelector(".call-ripple-wrapper");
        rippleWrapper.classList.remove("ringing");

        // System message logging outgoing call initiation
        logSystemCallMessage(translations[currentLanguage].systemCallOutgoing);

        // Start call duration clock ticking
        callState.durationSeconds = 0;
        clearInterval(callState.durationTimer);
        callState.durationTimer = setInterval(() => {
            callState.durationSeconds++;
            const minutes = Math.floor(callState.durationSeconds / 60);
            const seconds = callState.durationSeconds % 60;
            const minStr = minutes < 10 ? `0${minutes}` : minutes;
            const secStr = seconds < 10 ? `0${seconds}` : seconds;
            timerDiv.textContent = `${minStr}:${secStr}`;
        }, 1000);
    };

    const terminateCallSimulation = (reasonText) => {
        clearInterval(callState.durationTimer);
        clearTimeout(callState.connectionTimer);

        document.getElementById("call-connection-state").textContent = reasonText || translations[currentLanguage].callEnded;
        document.getElementById("call-connection-state").removeAttribute("data-i18n");
        document.querySelector(".call-ripple-wrapper").classList.remove("ringing");

        // Log call duration if connected
        if (callState.durationSeconds > 0) {
            const minutes = Math.floor(callState.durationSeconds / 60);
            const seconds = callState.durationSeconds % 60;
            const durationStr = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            logSystemCallMessage(`${translations[currentLanguage].systemCallEnded} ${durationStr}`);
        } else if (reasonText === translations[currentLanguage].callDeclined) {
            logSystemCallMessage(translations[currentLanguage].callDeclined);
        }

        setTimeout(() => {
            callOverlay.classList.remove("active");
            callState.isActive = false;
        }, 1500);
    };

    const logSystemCallMessage = (textMessage) => {
        if (!activeChatId) return;

        const messages = DB.get("messages");
        messages.push({
            id: `call_${Date.now()}`,
            chatId: activeChatId,
            sender: "system",
            text: textMessage,
            timestamp: Date.now(),
            read: true
        });
        DB.set("messages", messages);
        renderActiveChat();
    };

    // Decline / End Action Button
    declineCallBtn.addEventListener("click", () => {
        terminateCallSimulation(translations[currentLanguage].callEnded);
    });

    // Mute/Unmute microphone Button
    muteCallBtn.addEventListener("click", () => {
        callState.isMuted = !callState.isMuted;
        muteCallBtn.classList.toggle("muted", callState.isMuted);

        const onIcon = document.getElementById("mic-on-icon");
        const offIcon = document.getElementById("mic-off-icon");

        if (callState.isMuted) {
            onIcon.style.display = "none";
            offIcon.style.display = "block";
        } else {
            onIcon.style.display = "block";
            offIcon.style.display = "none";
        }
    });

    // Simulated incoming call interface setup trigger button (for profile setting testing)
    // We can trigger an incoming call by entering special command "/call" in Sofia chat!
    document.getElementById("message-form").addEventListener("submit", (e) => {
        const input = document.getElementById("message-input");
        const val = input.value.trim().toLowerCase();
        if (val === "/call" && activeChatId === "direct_sophia") {
            e.preventDefault();
            input.value = "";
            
            // Trigger incoming call simulation after 2 seconds
            setTimeout(() => {
                simulateIncomingCall("sophia");
            }, 1500);
        }
    });

    const simulateIncomingCall = (callerName) => {
        if (callState.isActive) return;

        callState.isActive = true;
        callState.type = "incoming";
        callState.user = callerName;
        callState.isMuted = false;
        callState.durationSeconds = 0;

        document.getElementById("call-user-avatar").textContent = callerName.charAt(0).toUpperCase();
        document.getElementById("call-user-name").textContent = callerName;
        document.getElementById("call-connection-state").textContent = translations[currentLanguage].systemCallIncoming;
        document.getElementById("call-connection-state").removeAttribute("data-i18n");
        document.getElementById("call-timer").style.display = "none";

        acceptCallBtn.classList.add("visible"); // Show Answer Button
        muteCallBtn.classList.remove("muted");
        document.getElementById("mic-on-icon").style.display = "block";
        document.getElementById("mic-off-icon").style.display = "none";

        callOverlay.classList.add("active");
        document.querySelector(".call-ripple-wrapper").classList.add("ringing");

        // Automatically decline if ignored for 15 seconds
        clearTimeout(callState.connectionTimer);
        callState.connectionTimer = setTimeout(() => {
            terminateCallSimulation(translations[currentLanguage].callDeclined);
        }, 15000);
    };

    // Bind incoming answer acceptance button
    acceptCallBtn.addEventListener("click", () => {
        acceptCallBtn.classList.remove("visible");
        connectCallSimulation();
    });
});
