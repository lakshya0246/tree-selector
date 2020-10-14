import { Tree } from "./interfaces";

export const RESPONSE: Tree =
{
    levelName: "site",
    entries: [
        { id: 1, name: "SNN Greenbay", child: undefined },
        {
            id: 2, name: "ABC Apartments", child:
            {
                levelName: 'zone',
                entries: [
                    {
                        id: 3, name: 'North', child:
                        {
                            levelName: 'building',
                            entries: [
                                {
                                    id: 6,
                                    name: 'A',
                                    child: {
                                        levelName: 'floor',
                                        entries: [
                                            {
                                                id: 6,
                                                name: '3',
                                                child: {
                                                    levelName: 'room',
                                                    entries: [
                                                        {
                                                            id: 6,
                                                            name: 'Bedroom',
                                                            child: undefined
                                                        },
                                                        {
                                                            id: 6,
                                                            name: 'Kitchen',
                                                            child: undefined,
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
        },
        {
            id: 2, name: "XYZ Greenbay", child:
            {
                levelName: 'zone',
                entries: [
                    {
                        id: 3, name: 'North', child:
                        {
                            levelName: 'building',
                            entries: [
                                {
                                    id: 6,
                                    name: 'A',
                                    child: {
                                        levelName: 'floor',
                                        entries: [
                                            {
                                                id: 6,
                                                name: '3',
                                                child: {
                                                    levelName: 'room',
                                                    entries: [
                                                        {
                                                            id: 6,
                                                            name: 'Bedroom',
                                                            child: undefined
                                                        },
                                                        {
                                                            id: 6,
                                                            name: 'Kitchen',
                                                            child: undefined,
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        id: 3, name: 'East', child:
                        {
                            levelName: 'building',
                            entries: [
                                {
                                    id: 6,
                                    name: 'D',
                                    child: {
                                        levelName: 'floor',
                                        entries: [
                                            {
                                                id: 6,
                                                name: '1',
                                                child: {
                                                    levelName: 'room',
                                                    entries: [
                                                        {
                                                            id: 6,
                                                            name: 'Bedroom',
                                                            child: undefined
                                                        },
                                                        {
                                                            id: 6,
                                                            name: 'Living',
                                                            child: undefined,
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                id: 6,
                                                name: '2',
                                                child: {
                                                    levelName: 'room',
                                                    entries: [
                                                        {
                                                            id: 6,
                                                            name: 'Bedroom',
                                                            child: undefined
                                                        },
                                                        {
                                                            id: 6,
                                                            name: 'Living',
                                                            child: undefined,
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                id: 6,
                                                name: '3',
                                                child: {
                                                    levelName: 'room',
                                                    entries: [
                                                        {
                                                            id: 6,
                                                            name: 'Bedroom',
                                                            child: undefined
                                                        },
                                                        {
                                                            id: 6,
                                                            name: 'Living',
                                                            child: undefined,
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    id: 6,
                                    name: 'F',
                                    child: {
                                        levelName: 'floor',
                                        entries: [
                                            {
                                                id: 6,
                                                name: '3',
                                                child: {
                                                    levelName: 'room',
                                                    entries: [
                                                        {
                                                            id: 6,
                                                            name: 'Drawing',
                                                            child: undefined
                                                        },
                                                        {
                                                            id: 6,
                                                            name: 'Study',
                                                            child: undefined,
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}