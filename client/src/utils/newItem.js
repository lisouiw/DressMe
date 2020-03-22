export const first = [
  {
    type: "upload",
    title: "Photo",
    component: { id: "photo", label: "photo-label" }
  },
  {
    type: "dropdown",
    component: {
      // items: data.type,
      title: "Type of clothes",
      // fct: onClick,
      type: "type"
    }
  },
  {
    type:"datePicker",
    title:"Date d'achat",
    component:{ required: true }
  }
];

export const third = [
  {
    title: "Style",
    placeholder: "Street, boheme,rock...",
    type: "style"
  },
  {
    title: "Color",
    placeholder: "Street, boheme,rock...",
    type: "color"
  },
  {
    title: "Composition",
    placeholder: "Street, boheme,rock...",
    type: "composition"
  }
];
