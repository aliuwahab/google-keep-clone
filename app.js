class App {
    constructor() {
        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$formButtons = document.querySelector('#form-buttons');
        this.addEventListeners();
    }

    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);
        })

    }

    handleFormClick(event) {
        const isFormClicked = this.$form.contains(event.target);

        if (isFormClicked) {
            //open form
            this.formOpen();
        } else {
            // close form
            this.formClose()
        }
    }


    formOpen() {
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }


    formClose() {
        this.$form.classList.remove('form-open');
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
    }


}


new App();