import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList:FullList): void,
}

export default class ListTemplate implements DOMList {

    ul: HTMLUListElement;
    
    static instance: ListTemplate = new ListTemplate();    

    private constructor () {
        this.ul = document.getElementById('listItems') as HTMLUListElement;
    };

    clear(): void {
        this.ul.innerHTML = '';
    }

    render(fullList: FullList): void {
        this.clear();
        fullList.list.forEach(item => {
            const liElement = document.createElement('li') as HTMLLIElement;
            liElement.classList.add("w-100", "border-8","flex", "content-between");
            
            const inputElement = document.createElement("input") as HTMLInputElement;
            inputElement.setAttribute("type", "checkbox");
            inputElement.setAttribute("id", item.id);
            inputElement.setAttribute("tabindex", "0");
            inputElement.classList.add("flex-1");
            inputElement.checked = item.check;            
            liElement.appendChild(inputElement);

            inputElement.addEventListener('change', () => {
                item.check = !item.check;
                fullList.save();
                if (item.check) {
                  labelElement.classList.add("line-through");
                } else {
                    labelElement.classList.remove("line-through");
                }
            })

            const labelElement = document.createElement("label") as HTMLLabelElement;
            labelElement.setAttribute("for", item.id);
            labelElement.textContent = item.item;
            labelElement.classList.add("text-yellow-100", "flex-1");
            
            liElement.appendChild(labelElement);

            const button = document.createElement("button") as HTMLButtonElement;
            button.classList.add('button');
            button.classList.add("text-yellow-100", "flex-1");
            button.textContent = 'X';
            
            liElement.appendChild(button);

            button.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            })

            this.ul.appendChild(liElement);
        })  
    }
};

