class View {
    /* 
        <input name="sample_model">
    */
    constructor(attribute = 'name') { //DOM attribute to bind as Model name.
        this.attribute = attribute;
        this.data_store = {};
        this.data = this.proxy()
        this.register()
    }
    proxy() {
        let this_obj = this;
        return new Proxy(this.data_store, {
            get: function (target, prop, receiver) {
                return Reflect.get(target, prop, receiver);
            },

            set: function (target, prop, receiver) {

                let ret_value = Reflect.set(target, prop, receiver);
                this_obj.updateUi(prop);
                return ret_value;
            },
        });
    }
    register() {
        document.querySelectorAll('[' + this.attribute + ']').forEach(el => {
            el.addEventListener('input', e => {
                const model = el.getAttribute(this.attribute);

                if ('value' in el)
                    this.data[model] = e.target.value;
                else
                    this.data[model] = e.target.innerHTML

                this.updateUi(model)
            })
            el.dispatchEvent(new Event('input'));
        })
    }

    updateUi(model) {

        // [name="sample_model"]
        document.querySelectorAll(`[${this.attribute}="${model}"]`).forEach(elem => {

            if ('value' in elem)
                elem.value = this.data[model];
            else
                elem.innerHTML = this.data[model]
        })
    }
}

let view = new View(); // Now access view.data globally ...
/* Also in your code you can go with: 
document.addEventListener("DOMContentLoaded", e => { view = new View(); }); */
