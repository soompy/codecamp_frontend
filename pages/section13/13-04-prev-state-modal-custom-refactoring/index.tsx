import React, { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalAlertPage(): JSX.Element {

    const [isOpen, setIsOpen] = useState(false)

    const showModal = (): void => {
        // 여기서 prev는 false다.
        setIsOpen((prev) => !prev);
    }

    const handleOk = (): void => {
        setIsOpen((prev) => !prev);
    }

    const handleCancel = (): void => {
        setIsOpen((prev) => !prev);
    }

    const handleComplete = (data: Address): void => {
        console.log(data);
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <button onClick={showModal}>모달창 열기!!</button>
            {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex. 이력서 등) */}
            {/* <Modal
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <DaumPostcodeEmbed onComplete={handleComplete}  />
            </Modal> */}

            {/* 모달 종료 방식 - 2. 모달 삭제하는 방법(ex. 신용카드, 비밀번호 등) */}
            {isOpen && (
                <Modal
                    open={true}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <DaumPostcodeEmbed onComplete={handleComplete}  />
                </Modal>
            )}
        </>
    );
}