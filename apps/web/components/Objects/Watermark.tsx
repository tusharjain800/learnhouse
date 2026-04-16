import Image from 'next/image'
import Link from 'next/link'
import lrnTextLogo from '@public/lrn-text.svg'
import React, { useEffect } from 'react'
import { useOrg } from '../Contexts/OrgContext'
import { useTranslation } from 'react-i18next'
import { isOSSMode } from '@services/config/config'
import { usePlan } from '@components/Hooks/usePlan'

function Watermark() {
    const { t } = useTranslation()
    const org = useOrg() as any

    useEffect(() => {
    }
        , [org]);

    const plan = usePlan()
    const isFreeUser = plan === 'free'
    const watermarkConfig = org?.config?.config?.customization?.general?.watermark ?? org?.config?.config?.general?.watermark
    // Free plan + OSS: always show. Paid plans: respect admin setting (default true).
    const showWatermark = isOSSMode() || isFreeUser || watermarkConfig !== false

    return null
}

export default Watermark