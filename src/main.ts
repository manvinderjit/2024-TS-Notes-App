import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = ():void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const formElement = document.getElementById("addTaskForm") as HTMLFormElement;
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;  

  formElement.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText);
    console.log(newItem);

    fullList.addItem(newItem);

    template.render(fullList);
  });
  

  clearItems.addEventListener("click", (): void => {    
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
}

initApp();
