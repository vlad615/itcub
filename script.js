const model = {
    courseData: {
        title: "Содержание курса",
        lessons: [
            {id: 1, title: "Введение в JS", isDone: true},
            {id: 2, title: "Операторы, сравнение, ветвление", isDone: false},
            {id: 3, title: "Функции", isDone: false},
            {id: 4, title: "Массивы", isDone: false},
            {id: 5, title: "Объекты", isDone: false},

        ]
    },

    render(){
        console.clear();
        console.log(this.courseData);
    }, 

    createLesson(LessonTitle){
        let newLesson = {
            id: 6,
            title: LessonTitle, 
            isDone: false
        }
        const newState = [...this.courseData.lessons, newLesson];
        this.courseData.lessons = newState;
        this.render();

    },

    deleteLesson(lessonId){
        const newState = this.courseData.lessons.filter(x => x.id != lessonId);
        this.courseData.lessons = newState;
        this.render();

    },

    updateLesson(lessonId){
        const newState = this.courseData.lessons.map(x => x.id == lessonId ? {...x, isDone: !x.isDone} : x);
        this.courseData.lessons = newState;
        this.render();
    },

    updateTitle(Title){
        const newState = {title: Title, lessons: [...this.courseData.lessons]}
    },
}

function init(){
    model.render();
}

init();