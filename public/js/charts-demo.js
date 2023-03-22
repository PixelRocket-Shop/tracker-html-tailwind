let demoOptions = {
    area: {
        series: [{
            data: [15, 18, 21, 18, 16, 19, 15, 18, 22, 19, 20, 18, 17, 19, 15, 18, 14, 15],
        }],
        chart: {
            height: 180,
            type: 'area',
            sparkline: {
                enabled: true,
            },
        },
        grid: {
            show: true,
        },
        colors: ['#2563EB'],
        fill: {
            type: ['solid'],
            colors: ['rgba(37, 99, 235, 0.12)']
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        __variants: {
            'dark-bg': {
                colors: ['#8880EB'],
                fill: {
                    type: ['solid'],
                    colors: ['#6056E4'],
                },
            },
        },
    },
    
    "chart-line": {
        series: [
            { name: 'Unique visitors', data: [100, 65, 100, 95, 102, 90, 84] },
            { name: 'Total visitors', data: [92, 100, 80, 97, 70, 112, 98] },
        ],
        chart: {
            height: 100,
            type: 'line',
            sparkline: {
                enabled: true
            },
        },
        colors: ['#2563EB', '#FACC15'],
        fill: {
            type: ['solid'],
            colors: ['#EBEAFC'],
        },
        stroke: {
            width: 2,
        },        
        options: {
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                text: 'Chart.js Line Chart'
                }
            }
        },
    },

    'area-small': {
        series: [{
            data: [140, 110, 120, 140, 110, 130, 100, 120, 150, 120]
        }],
        chart: {
            height: 100,
            type: 'area',
            sparkline: {
                enabled: true
            },
        },
        colors: ['#382CDD'],
        fill: {
            type: ['solid'],
            colors: ['#EBEAFC'],
        },
        stroke: {
            width: 2,
        },
        __variants: {
            indigo: {
                colors: ['#382CDD'],
                fill: {
                    type: ['solid'],
                    colors: ['#D7D5F8'],
                },
            },
            'indigo-gradient': {
                colors: ['#382CDD'],
                fill: {
                    type: ['gradient'],
                    colors: ['#8880EB', '#EBEAFC'],
                },
            },
            blue: {
                colors: ['#2D70F5'],
                fill: {
                    type: ['solid'],
                    colors: ['#D5E2FD'],
                },
            },
            'blue-gradient': {
                colors: ['#2D70F5'],
                fill: {
                    type: ['gradient'],
                    colors: ['#81A9F9', '#EAF1FE'],
                },
            },
            green: {
                colors: ['#17BB84'],
                fill: {
                    type: ['solid'],
                    colors: ['#D1F1E6'],
                },
            },
            'green-gradient': {
                colors: ['#17BB84'],
                fill: {
                    type: ['gradient'],
                    colors: ['#74D6B5', '#E8F8F3'],
                },
            },
            orange: {
                colors: ['#F67A28'],
                fill: {
                    type: ['solid'],
                    colors: ['#FDE4D4'],
                },
            },
            'orange-gradient': {
                colors: ['#F67A28'],
                fill: {
                    type: ['gradient'],
                    colors: ['#FAAF7E', '#FEF2EA'],
                },
            },
        },
    },

    'columns-stacked': {
        series: [
            {
                data: [20, 50, 18, 50, 30, 40, 30, 40],
            },
            {
                data: [30, 0, 32, 0, 20, 10, 20, 10],
            },
        ],
        chart: {
            type: 'bar',
            height: 100,
            stacked: true,
            sparkline: {
                enabled: true,
            },
        },
        colors: ['#2D70F5', '#F1F5FB'],
        fill: {
            opacity: 1,
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
            },
        },
    },

    'columns-thin': {
        series: [
            { name: 'Unique visitors', data: [70, 65, 70, 65, 72, 90, 84] },
            { name: 'Total visitors', data: [92, 92, 90, 97, 90, 112, 98] },
            { name: 'Total visitors', data: [112, 100, 112, 112, 86, 101, 92] },
        ],
        chart: {
            type: 'bar',
            height: 300,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            colors: ['transparent'],
            width: 4,
        },
        colors: ['#2563EB', '#936DFF', '#FACC15'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: 20,
            },
        },
        xaxis: {
            categories: ['Dec 25', 'Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31'],
        },
        __variants: {
            two: {
                series: [
                    { name: 'This year', data: [60, 55, 60, 55, 62, 55, 64] },
                    { name: 'Last year', data: [92, 92, 90, 97, 90, 112, 98] },
                ],
                xaxis: {
                    categories: ['Jul 1','Jul 2', 'Jul 3', 'Jul 4', 'Jul 5', 'Jul 6', 'Jul 7'],
                },
            },
        },
    },

    columns: {
        series: [{
            data: [
                10, 5, 8, 9, 5, 8, 10
            ],
        }],
        chart: {
            height: 200,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#2563EB'],
        xaxis: {
            type: 'integer',
            categories: [
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
            ],
            labels: {
                show: true,
                hideOverlappingLabels: false,
                showDuplicates: true,
                trim: false,
            },
        },
        yaxis: {
            opposite: true,
            labels: {
                show: true,
                align: 'right',
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
            },
        },
    },

    'radial-bar-part': {
        series: [64],
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true,
            },
        },
        colors: ['#194BFB'],
        stroke: {
            lineCap: 'round',
        },
        plotOptions: {
            radialBar: {
                startAngle: -95,
                endAngle: 95,
                hollow: {
                    margin: 15,
                    size: '70%',
                },
                track: {
                    background: '#1A202C',
                    strokeWidth: '97%',
                    margin: 5,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    },
                },
            },
        },
        __variants: {
            four: {
                series: [80, 60, 50, 20],
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true,
                    },
                },
                colors: ['#194BFB', '#936DFF', '#FACC15', '#24D164'],
                stroke: {
                    lineCap: 'round',
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -95,
                        endAngle: 95,
                        hollow: {
                            margin: 15,
                            size: '70%',
                        },
                        track: {
                            background: '#1A202C',
                            strokeWidth: '97%',
                            margin: 5,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            },
                        },
                    },
                },
            }
        },
    },

    'radial-bar': {
        series: [60],
        chart: {
            type: 'radialBar',
            sparkline: {
                enabled: true,
            },
        },
        colors: ['#2563EB'],
        stroke: {
            lineCap: 'round',
        },
        plotOptions: {
            radialBar: {
                startAngle: -120,
                endAngle: 240,
                hollow: {
                    margin: 15,
                    size: '65%',
                },
                track: {
                    background: '#EBEAFC',
                    strokeWidth: '97%',
                    margin: 5,
                },
                dataLabels: {
                    total: {
                        show: true,
                        label: '$16,250',
                        fontSize: 24,
                        formatter: () => 'Total Payments',
                    },
                },
            },
        },
        __variants: {
            orange: {
                colors: ['#F67A28'],
                plotOptions: {
                    radialBar: {
                        startAngle: -120,
                        endAngle: 240,
                        hollow: {
                            margin: 15,
                            size: '65%',
                        },
                        track: {
                            background: '#EBEAFC',
                            strokeWidth: '97%',
                            margin: 5,
                        },
                        dataLabels: {
                            total: {
                                show: true,
                                label: '$16,250',
                                fontSize: 24,
                                formatter: () => 'Total inventory',
                            },
                        },
                    },
                },
            },
        },
    },

    donut: {
        series: [20, 65, 15],
        chart: {
            type: 'donut',
            width: '100%',
            height: 240,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#FACC15', '#2563EB', '#936DFF'],
        stroke: {
            colors: 'transparent',
            lineCap: 'round',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '79%',
                    labels: {
                        show: false,
                        total: {
                            label: 'Traffic by device',
                            showAlways: true,
                            show: true,
                        },
                    },
                },
            },
            stroke: {
                colors: undefined,
            },
        },
    },
};

const renderedCharts = [];
function updateCharts() {
    if (typeof ApexCharts !== 'function') {
        return;
    }

    const chartElements = document.querySelectorAll('.chart');

    chartElements.forEach((chartElement) => {
        if (renderedCharts.includes(chartElement)) {
            return;
        }

        const type = chartElement.getAttribute('data-type');
        const variant = chartElement.getAttribute('data-variant');

        if (typeof demoOptions[type] === 'object') {
            let options = demoOptions[type];

            if (typeof options['__variants'] === 'object' && typeof options['__variants'][variant] === 'object') {
                options = { ...options, ...options['__variants'][variant] };
            }

            const chart = new ApexCharts(chartElement, options);
            chart.render();
            renderedCharts.push(chartElement);
        }
    });
}

updateCharts();
