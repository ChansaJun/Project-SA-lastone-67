
package entity

import (
	"gorm.io/gorm"
	"time"
	
)

type Payment struct {
	gorm.Model
	
	Date      time.Time
	TotalPrice float32
	
	ReserveID uint
	Reserve Reserve `gorm:"foreignKey:ReserveID"`
}
