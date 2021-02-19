import {useCallback} from 'react'
import UIkit from 'uikit';

export const useMessage = () => {
    return useCallback((text, props = { pos: 'bottom-right' }) => {
        if (UIkit && text) {
            UIkit.notification(text, props)
        }
    }, [])
}