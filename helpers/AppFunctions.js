export default class AppFunctions {
  static addClass(element, className) {
    document.querySelector(element).classList.add(className);
  }

  static removeClass(element, className) {
    document.querySelector(element).classList.remove(className);
  }

  static toggleClass(element, className) {
    document.querySelector(element).classList.toggle(className);
  }
}
