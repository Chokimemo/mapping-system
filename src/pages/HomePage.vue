<template>
    <div>
        <NavMenu>
            <div class="dashboard">
                <h2>Dashboard</h2>
                <div class="chart-container">
                    <svg class="chart" :height="height">
                        <!-- Gradient Fill -->
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stop-color="#1E90FF" stop-opacity="0.6" />
                                <stop offset="100%" stop-color="#000080" stop-opacity="1" />
                            </linearGradient>
                        </defs>

                        <!-- X and Y Axis -->
                        <line :x1="padding" :y1="height - padding" :x2="width - padding" :y2="height - padding"
                            stroke="#aaa" stroke-width="2" />
                        <line :x1="padding" :y1="padding" :x2="padding" :y2="height - padding" stroke="#aaa"
                            stroke-width="2" />

                        <!-- Horizontal Grid Lines -->
                        <g v-for="i in 5" :key="i">
                            <line :x1="padding" :y1="height - padding - (i * (chartHeight / 5))" :x2="width - padding"
                                :y2="height - padding - (i * (chartHeight / 5))" stroke="#ddd" stroke-width="1" />
                        </g>

                        <!-- Bars and Labels -->
                        <g v-for="(item, index) in data" :key="index">
                            <rect :x="padding + (index + 0.5) * (barWidth + barSpacing)"
                                :y="height - padding - item.value * scaleY" :width="barWidth"
                                :height="item.value * scaleY" fill="url(#barGradient)" />

                            <!-- Value Labels -->
                            <text :x="padding + (index + 0.5) * (barWidth + barSpacing) + barWidth / 2"
                                :y="height - padding - item.value * scaleY - 5" text-anchor="middle" font-size="14"
                                font-weight="bold" fill="#333">{{ item.value }}</text>

                            <!-- Category Labels with 2 lines -->
                            <text v-for="(line, lineIndex) in item.name.split('\n')" :key="lineIndex"
                                :x="padding + (index + 0.5) * (barWidth + barSpacing) + barWidth / 2"
                                :y="height - padding + 20 + (lineIndex * 14)" text-anchor="middle" font-size="12"
                                fill="#555">{{ line }}</text>
                        </g>
                    </svg>
                </div>
            </div>
        </NavMenu>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';


export default {
    name: "HomePage",
    components: { NavMenu },
    data() {
        return {
            width: 10000,
            height: 400,
            padding: 50,
            barWidth: 70,
            barSpacing: 50,
            data: [
                { name: "EXPORT CBU\nFTM (Excel)", value: 1000 },
                { name: "EXPORT CBU\nFTM (Excel) Non Mic", value: 510 },
                { name: "EXPORT CBU\nFTM (Text)", value: 230 },
                { name: "EXPORT TYPE 1\nPart&RSR (FTM)", value: 880 },
                { name: "Type P SCARP\n(Excel) FTM", value: 330 },
                { name: "IMPORT\nTYPE 0 (FTM)", value: 400 },
                { name: "IMPORT\nTYPE P (FTM)", value: 580 },
                { name: "IMPORT\nTYPE P (FCSD)", value: 100 },
                { name: "IMPORT\nTYPE P (CBU)", value: 700 }
            ]
        };
    },
    computed: {
        chartHeight() {
            return this.height - this.padding * 2;
        },
        maxValue() {
            return Math.max(...this.data.map(d => d.value));
        },
        scaleY() {
            return this.chartHeight / this.maxValue;
        }
    }
}
</script>

<style>
.content {
    flex-grow: 1;
    padding: 20px;
    background: rgb(240, 240, 240);
}

.dashboard {
    border: 1px solid rgb(180, 180, 180);
    border-radius: 20px;
    text-align: center;
    margin: 20px;
    background-color: white;
}

.dashboard h2 {
    font-size: 50px;
    text-transform: uppercase;
    color: #444444;
    margin: 20px auto;
}

.chart-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-right: 50px;
}

.chart {
    width: 100%;
}
</style>