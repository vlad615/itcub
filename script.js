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
        document.body.innerHTML = ""
        let view = CourseView(this.courseData)
        document.body.append(view)
    }, 

    createLesson(LessonTitle){
        let newLesson = {
            id: new Date().getTime(),
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

    updatelessonTitle(lessonId, Title){
        const newState = this.courseData.lessons.map(x => x.id == lessonId ? {...x, title: Title} : x);
        this.courseData.lessons = newState;
        this.render();
    },

    updateTitle(Title){
        const newState = {...this.courseData, title: Title}
        this.courseData = newState;
        this.render();
    },
    
}

function init(){
    model.render()
}

init();

function CourseView(data){
    const section = document.createElement("section")

    const title = createTitle(data.title)

    const message = document.createElement("div")
    message.classList.add("green")
    const form = createForm(message)

    const list = createList(data.lessons)



    section.append(
        title, form, list, message
    )

    return section
}


function createTitle(Title){
    const title = document.createElement("h1")
    title.setAttribute("id", "course-title")
    title.classList.add("title")
    title.textContent = Title

    return title
}

function createForm(message) {
    const form = document.createElement("form")
    form.classList.add("list-form")
    form.setAttribute('action', 'post')
    form.innerHTML = `
        <input type="text" name="lesson" placeholder="введите название урока" required />
        <button type="submit">Добавить</button>
    `
    form.addEventListener("submit", (ev) => {
        ev.preventDefault()
        const value = form.lesson.value

        message.textContent = "Adding ..."
        setTimeout(()=>{
            model.createLesson(value)
            message.textContent = ''
        }, 1000)
            
    })

    return form
}

function createList(lessons){
    const ul = document.createElement("ul")
    ul.classList.add("list")

    lessons.forEach(x => {
        const li = document.createElement("li")
        li.classList.add("item")
        li.textContent = x.title
        if (x.isDone) {li.classList.add("done")}
        li.addEventListener("dblclick", () => model.updateLesson(x.id))
        const but_del = document.createElement("button")
        but_del.classList.add("delete")
        but_del.textContent = "X"

        but_del.addEventListener("click", () => model.deleteLesson(x.id))
        li.append(but_del)
        ul.append(li)
    })

    return ul
}
