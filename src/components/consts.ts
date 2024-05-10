export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const;

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        title: "Todos",
        href: `/?filter=${TODO_FILTERS.ALL}`,
    },
    [TODO_FILTERS.ACTIVE]: {
        title: "Activos",
        href: `/?filter=${TODO_FILTERS.ACTIVE}`,
    },
    [TODO_FILTERS.COMPLETED]: {
        title: "Completados",
        href: `/?filter=${TODO_FILTERS.COMPLETED}`,
    },
} as const;