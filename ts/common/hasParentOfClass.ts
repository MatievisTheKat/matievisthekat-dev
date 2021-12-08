function hasSomeParentOfClass(element: HTMLElement, classname: string): boolean {
  if (element.className.split(' ').indexOf(classname) >= 0) return true;
  return (element.parentElement && hasSomeParentOfClass(element.parentElement, classname)) ?? false;
}
