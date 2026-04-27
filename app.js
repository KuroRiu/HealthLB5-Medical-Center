import NewsCard from "./NewsCard.js";
const app = Vue.createApp({
    components: {
        NewsCard
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 2,
            news: [
                {
                    id: 1,
                    title: "New MRI Equipment",
                    description: "Our center now provides faster and more accurate diagnostics.",
                    image: "card1.jpg"
                },
                {
                    id: 2,
                    title: "Free Heart Checkup Week",
                    description: "Patients can receive free cardiology consultations this month.",
                    image: "card2.jpg"
                },
                {
                    id: 3,
                    title: "Modern Surgery Department",
                    description: "We opened a new department with advanced medical technologies.",
                    image: "card3.jpg"
                },
                {
                    id: 4,
                    title: "Pediatric Care Expansion",
                    description: "Our pediatric team is now available seven days a week.",
                    image: "card4.jpg"
                },
                {
                    id: 5,
                    title: "Vaccination Program",
                    description: "Seasonal vaccination is available for all patients.",
                    image: "card1.jpg"
                },
                {
                    id: 6,
                    title: "Emergency Service Upgrade",
                    description: "Emergency rooms were upgraded with new equipment.",
                    image: "card2.jpg"
                }
            ]
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.news.length / this.pageSize);
        },
        paginatedNews() {

            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;

            return this.news.slice(start, end);
        }
    },
    watch: {
    currentPage(newValue) {
        console.log("Current page changed to:", newValue);
    }
},
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        }
    }
});
app.mount("#app");