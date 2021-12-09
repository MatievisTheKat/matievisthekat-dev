function hasSomeParentOfClass(element: HTMLElement, classname: string): boolean {
  if (element.classList.contains(classname)) return true;
  return (element.parentElement && hasSomeParentOfClass(element.parentElement, classname)) ?? false;
}
