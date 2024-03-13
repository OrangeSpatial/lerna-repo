
/**
 * DropTypes
 * @description: Enum for DndTypes
 * 放置的类型:
 * 可以放置容器内node
 * 可以放置容器外node
 * 可以放置容器内node和容器外node
 */
export enum DropTypes {
    IN = 'in',
    OUT = 'out',
    ALL = 'all'
}

export interface VDndProps {
    dropType: DropTypes;
    draggable: boolean;
    data: any[];
}

export interface VDndItemProps {
    draggable: boolean;
    droppable: boolean;
}