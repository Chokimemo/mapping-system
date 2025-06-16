<template>
    <div class="nav-container">
        <!-- Sidebar -->
        <div :class="['sidebar', { collapsed: isCollapsed }]">
            <button @click="toggleSidebar" class="toggle-btn">
                <i class="mdi mdi-menu"></i>
            </button>
            <ul class="menu">
                <li v-for="item in menuItems" :key="item.title" :class="{ active: isActive(item.to) }"
                    @mouseover="hoveredItem = item.title" @mouseleave="hoveredItem = ''" @click="navigateTo(item.to)">
                    <i :class="item.icon"></i>
                    <span v-if="!isCollapsed">{{ item.title }}</span>
                    <span v-if="isCollapsed && hoveredItem === item.title" class="tooltip">
                        {{ item.title }}
                    </span>
                </li>
            </ul>
        </div>

        <!-- Content -->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapsed: false,
            hoveredItem: "",
            menuItems: [
                { title: "Dashboard", icon: "mdi mdi-chart-bar", to: "/home" },
                { title: "EXPORT CBU FTM (Excel)", icon: "mdi mdi-export", to: "/export-excel" },
                { title: "EXPORT CBU FTM (Excel) Non Mic", icon: "mdi mdi-export", to: "/export-non-mic" },
                { title: "EXPORT CBU FTM (Text)", icon: "mdi mdi-export", to: "/export-text" },
                { title: "EXPORT TYPE 1 Part&RSR (FTM)", icon: "mdi mdi-export", to: "/export-type1" },
                { title: "Type P SCARP (Excel) FTM", icon: "mdi mdi-export", to: "/typep-scarp" },
                { title: "IMPORT TYPE 0 (FTM)", icon: "mdi mdi-import", to: "/import-type0" },
                { title: "IMPORT TYPE P (FTM)", icon: "mdi mdi-import", to: "/import-typep-ftm" },
                { title: "IMPORT TYPE P (FCSD)", icon: "mdi mdi-import", to: "/import-typep-fcsd" },
                { title: "IMPORT TYPE P (CBU)", icon: "mdi mdi-import", to: "/import-typep-cbu" },
            ],
        };
    },
    computed: {
        currentRoute() {
            return this.$route.path;
        },
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
        },
        navigateTo(route) {
            this.$router.push(route);
        },
        isActive(route) {
            return this.currentRoute === route;
        },
    },
};
</script>

<style scoped>
.nav-container {
    display: flex;
    height: 100vh;
}

.sidebar {
    width: max-content;
    background-image: linear-gradient(#1E90FF, #000080);
    color: whitesmoke;
    padding-top: 20px;
    position: relative;
}

.sidebar.collapsed {
    width: max-content;
}

.sidebar .toggle-btn {
    background: none;
    border: none;
    color: whitesmoke;
    font-size: 24px;
    padding: 12px;
    width: 100%;
    cursor: pointer;
}

.sidebar .toggle-btn:hover {
    background: #34495e;
    border-radius: 40px;
}

.sidebar .menu {
    list-style: none;
    padding: 0;
}

.sidebar .menu li {
    padding: 12px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: background 0.3s, color 0.3s;
}

.sidebar .menu li:hover {
    background: #34495e;
}

/* เมนูที่อยู่ในหน้าปัจจุบัน */
.sidebar .menu li.active {
    background: rgb(240, 240, 240);
    color: #000080;
    font-weight: bold;
}

.sidebar .menu li i {
    font-size: 20px;
    margin-right: 10px;
}

/* ซ่อนชื่อเมนูเมื่อ Sidebar ย่อ */
.sidebar.collapsed .menu li span:not(.tooltip) {
    display: none;
}

/* แสดง Tooltip */
.tooltip {
    position: absolute;
    left: 70px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    z-index: 10;
}
</style>