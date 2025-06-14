document.addEventListener("DOMContentLoaded", () => {
    // Mostrar data
    const dataatualElement = document.getElementById("dataatual");
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataatual = new Date().toLocaleDateString('pt-BR', opcoes);
    dataatualElement.textContent = dataatual.charAt(0).toUpperCase() + dataatual.slice(1);

    // Gerar gráfico circular
    gerarGrafico();
});

function gerarGrafico() {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const labels = activities.map(activity => activity.name);
    const data = activities.map(activity => activity.totalSeconds / 3600); // Convertendo segundos para horas
    const colors = activities.map(activity => activity.color || '#1d3fa1');

    const ctx = document.getElementById('graficoAtividades').getContext('2d');
    const totalHours = data.reduce((a, b) => a + b, 0).toFixed(2); // Soma total de horas

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                    }
                }
            }
        }
    });

    // Exibir soma total de horas no centro do gráfico
    document.getElementById('somaTempo').textContent = `${totalHours}h`;

    // Gerar lista de atividades
    const listaAtividades = document.getElementById('listaAtividades');
    listaAtividades.innerHTML = ''; // Limpa a lista antes de adicionar
    activities.forEach(activity => {
        const item = document.createElement('div');
        item.className = 'atividade-item';
        const corDiv = document.createElement('div');
        corDiv.className = 'atividade-cor';
        corDiv.style.backgroundColor = activity.color || '#1d3fa1'; // Define a cor da atividade
        const nomeAtividade = document.createElement('span');
        nomeAtividade.textContent = `${activity.name} - ${Math.floor(activity.totalSeconds / 3600)}h ${Math.floor((activity.totalSeconds % 3600) / 60)}m`;
        item.appendChild(corDiv);
        item.appendChild(nomeAtividade);
        listaAtividades.appendChild(item);
    });
}
