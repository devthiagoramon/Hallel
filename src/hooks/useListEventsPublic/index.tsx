import { useQuery } from "@tanstack/react-query";
import { listEventsPublicService } from "api/events/eventsAPI";
import { QUERIES } from "hooks/queryConsts";

export const useListEventsPublic = () => {
    return useQuery({
        queryKey: [QUERIES.LIST_EVENTS_PUBLIC],
        queryFn: async () => {
            return await listEventsPublicService();
        }
    })
}