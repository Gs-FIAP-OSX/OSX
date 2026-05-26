import { useMemo } from "react"

export function useDate() {
    return useMemo(() => {
        const now = new Date()

        const months = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ]

        return {
            day: now.getDate(),
            month: months[now.getMonth()],
            year: now.getFullYear(),
            full: `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`,
        }
    }, [])
}