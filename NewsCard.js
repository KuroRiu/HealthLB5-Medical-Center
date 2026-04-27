export default {
    props: {
        news: Object
    },
    template: `
    <div class="card">
        <img :src="news.image" :alt="news.title">
        <h3>{{ news.title }}</h3>
        <p>{{ news.description }}</p>
    </div>
    `
}