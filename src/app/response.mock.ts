import { Tree } from "./interfaces";

export const RESPONSE: Tree =
{
    levelName: "site",
    entries: [
        { id: 1, name: "SNN Greenbay", children: undefined },
        {
            id: 2, name: "CNN Greenbay", children: [
                {
                    levelName: 'zone',
                    entries: [
                        { id: 3, name: 'North', children: undefined },
                        { id: 4, name: 'South', children: undefined }
                    ]
                }
            ]
        }
    ]
}  
