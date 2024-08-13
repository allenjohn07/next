'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'

const UpVote = () => {
    const [vote, setVote] = useState(0)
    return (
        <div>
            <div className='mt-10 space-y-2'>
                <p className='font-semibold font-mono'>{vote}</p>
                <Button onClick={() => setVote(vote + 1)} className='rounded-sm bg-blue-400 hover:bg-blue-300' variant="outline">
                    <ArrowUp size="17" />
                    Vote
                </Button>
            </div>
        </div>
    )
}

export default UpVote